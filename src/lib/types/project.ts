export type ProjectMetadata = {
	id: number;
	title: string;
	tags: string[];
	link: string;
	blurb: string;
};

export type ProjectModule = {
	metadata: ProjectMetadata;
	default: unknown;
};
