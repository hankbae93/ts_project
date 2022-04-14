export type ResourceType = string | File;

export interface ResourceState {
	data: ResourceType[];
}

/*  리덕스 타입  */
export interface RootState {
	resource: ResourceState;
}
