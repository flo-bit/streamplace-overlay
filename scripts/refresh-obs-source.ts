#!/usr/bin/env tsx
// Refresh an OBS Browser Source via obs-websocket v5.
// usage: refresh-obs-source.ts <source-name>
// env: OBS_WEBSOCKET_URL (default ws://localhost:4455), OBS_WEBSOCKET_PASSWORD
import { createHash } from 'node:crypto';

const sourceName = process.argv[2];
if (!sourceName) {
	console.error('usage: refresh-obs-source.ts <source-name>');
	process.exit(2);
}

const url = process.env.OBS_WEBSOCKET_URL ?? 'ws://localhost:4455';
const password = process.env.OBS_WEBSOCKET_PASSWORD ?? '';

function sha256b64(input: string) {
	return createHash('sha256').update(input).digest('base64');
}

const ws = new WebSocket(url);
const requestId = crypto.randomUUID();
let identified = false;

ws.addEventListener('open', () => {
	console.error(`[refresh-obs-source] connected to ${url}`);
});

ws.addEventListener('message', (ev) => {
	const msg = JSON.parse(ev.data as string) as { op: number; d: any };

	if (msg.op === 0) {
		// Hello → Identify
		const auth = msg.d.authentication;
		const identify: any = { rpcVersion: 1 };
		if (auth) {
			if (!password) {
				console.error('[refresh-obs-source] server requires auth, set OBS_WEBSOCKET_PASSWORD');
				process.exit(1);
			}
			identify.authentication = sha256b64(sha256b64(password + auth.salt) + auth.challenge);
		}
		ws.send(JSON.stringify({ op: 1, d: identify }));
		return;
	}

	if (msg.op === 2) {
		// Identified → send refresh request
		identified = true;
		ws.send(
			JSON.stringify({
				op: 6,
				d: {
					requestType: 'PressInputPropertiesButton',
					requestId,
					requestData: { inputName: sourceName, propertyName: 'refreshnocache' },
				},
			}),
		);
		return;
	}

	if (msg.op === 7 && msg.d.requestId === requestId) {
		const ok = msg.d.requestStatus?.result;
		if (ok) {
			console.error(`[refresh-obs-source] refreshed "${sourceName}"`);
			ws.close();
			process.exit(0);
		} else {
			console.error(
				`[refresh-obs-source] failed: ${msg.d.requestStatus?.code} ${msg.d.requestStatus?.comment ?? ''}`,
			);
			ws.close();
			process.exit(1);
		}
	}
});

ws.addEventListener('error', (ev) => {
	console.error('[refresh-obs-source] error', ev);
	process.exit(1);
});

ws.addEventListener('close', (ev) => {
	if (!identified) {
		console.error(`[refresh-obs-source] closed before identify (${ev.code})`);
		process.exit(1);
	}
});
