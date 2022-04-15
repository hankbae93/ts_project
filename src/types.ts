export type ResourceType = string | File;

export interface ResourceObjType {
	data: ResourceType;
	name: string;
}

export interface ResourceState {
	data: ResourceObjType[];
	loading: boolean;
	toast: string[];
}

/*  리덕스 타입  */
export interface RootState {
	resource: ResourceState;
}
