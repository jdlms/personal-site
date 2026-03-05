// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

// Cloudflare KV type (simplified)
interface KVNamespace {
	get(key: string): Promise<string | null>;
	put(key: string, value: string): Promise<void>;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				KV_STORE: KVNamespace;
			};
		}
	}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	export default class extends SvelteComponent {}
	export const metadata: Record<string, unknown>;
}

export {};
