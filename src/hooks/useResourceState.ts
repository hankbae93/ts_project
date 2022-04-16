import { useSelector, useDispatch } from "react-redux";
import { ResourceState, RootState } from "../types";

const useResourceState = () => {
	const dispatch = useDispatch();
	const { data, loading, toast, selectId } = useSelector<
		RootState,
		ResourceState
	>((state) => state.resource);
	return { dispatch, data, loading, toast, selectId };
};

export default useResourceState;
