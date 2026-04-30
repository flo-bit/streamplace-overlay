#!/usr/bin/env bash
# Atomically drain a chat log written by listen-chat.ts.
# Renames the log out of the way, prints its contents, then deletes it.
# usage: drain-chat.sh [chat-file]   (default: chat.txt)
set -euo pipefail

src=${1:-chat.txt}
pending=$src.pending

if [ -f "$pending" ]; then
	cat "$pending"
	rm -f "$pending"
fi

if [ -f "$src" ]; then
	mv "$src" "$pending"
	cat "$pending"
	rm -f "$pending"
fi
