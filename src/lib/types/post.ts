export type PostMetadata = {
	title: string;
	pubDatetime?: string | Date;
	date?: string | Date;
	description: string;
	author?: string;
	slug?: string;
	featured?: boolean;
	tags?: string[];
};

export type PostModule = {
	metadata: PostMetadata;
	default: unknown;
};

export type PostEntry = {
	slug: string;
	title: string;
	date: Date | null;
	description?: string;
};
