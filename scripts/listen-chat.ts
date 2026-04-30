#!/usr/bin/env tsx
import { appendFileSync } from 'node:fs';
import { resolve } from 'node:path';

const COLLECTION = 'place.stream.chat.message';
const JETSTREAM_URL = 'wss://jetstream2.us-east.bsky.network/subscribe';

const args = process.argv.slice(2);
const streamerDid = args[0]?.startsWith('did:') ? args[0] : undefined;
const outFile = resolve((streamerDid ? args[1] : args[0]) ?? 'chat.txt');

const url = `${JETSTREAM_URL}?wantedCollections=${encodeURIComponent(COLLECTION)}`;

type JetstreamEvent = {
	did: string;
	time_us: number;
	kind: 'commit' | 'identity' | 'account';
	commit?: {
		rev: string;
		operation: 'create' | 'update' | 'delete';
		collection: string;
		rkey: string;
		record?: {
			$type: string;
			text: string;
			streamer: string;
			createdAt: string;
		};
		cid?: string;
	};
};

function connect() {
	console.error(
		`[listen-chat] connecting, ${streamerDid ? `filtering streamer=${streamerDid}` : 'no streamer filter'}`,
	);
	const ws = new WebSocket(url);

	ws.addEventListener('open', () => console.error('[listen-chat] connected'));

	ws.addEventListener('message', (ev) => {
		let msg: JetstreamEvent;
		try {
			msg = JSON.parse(ev.data as string);
		} catch {
			return;
		}
		const c = msg.commit;
		if (!c || c.operation !== 'create' || c.collection !== COLLECTION) return;
		const rec = c.record;
		if (!rec) return;
		if (streamerDid && rec.streamer !== streamerDid) return;

		const line = `${msg.did}: ${rec.text}`;
		appendFileSync(outFile, line + '\n');
		console.log(line);
	});

	ws.addEventListener('close', (ev) => {
		console.error(`[listen-chat] closed (${ev.code}); reconnecting in 2s`);
		setTimeout(connect, 2000);
	});

	ws.addEventListener('error', (ev) => {
		console.error('[listen-chat] error', ev);
	});
}

connect();
