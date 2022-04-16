import { useSelector, useDispatch } from "react-redux";
import { selectItem } from "../../../redux/modules/resource";
import { RootState, ResourceState } from "../../../types";

const useViewer = () => {
	const dispatch = useDispatch();
	const { selectId, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);

	const handleClose = () => {
		dispatch(selectItem(null));
	};

	const getSrc = () => {
		if (selectId !== null) {
			const index = data.findIndex((v) => v.id === selectId);
			const value = data[index].data;
			if (typeof value === "string") {
				return value;
			} else if (typeof value === "object") {
				const objURL = window.URL.createObjectURL(value);
				return objURL;
			}
		}
	};

	const getTitle = () => {
		if (selectId !== null) {
			const index = data.findIndex((v) => v.id === selectId);
			return data[index].name;
		}
	};

	return {
		selectId,
		handleClose,
		getSrc,
		getTitle,
	};
};

export default useViewer;
