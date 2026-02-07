declare const __VERSION__: string;

export const VERSION = __VERSION__;

export const SEVEN_DAYS = 1000 * 60 * 60 * 24 * 7;

export type SyncNode = {
	id: string;
	official: boolean;
	name: string;
	url: string;
	internalKey?: string;
};

let activeNode = 'kromer';

export const SYNC_NODES: SyncNode[] = [
	{
		id: 'herrkatze',
		official: true,
		name: 'Katze Test Node',
		url: 'https://kromer.herrkatze.com/api/krist/',
		internalKey: 'dQw4w9WgXcQ'
	}
];

export const SYNC_NODE_OFFICIAL: SyncNode = SYNC_NODES.find((x) => x.official)!;

export function updateActiveNode(id: string) {
	activeNode = id;
}

export function getSyncNode(): SyncNode {
	return SYNC_NODES.find((node) => node.id === activeNode) ?? SYNC_NODE_OFFICIAL;
}
