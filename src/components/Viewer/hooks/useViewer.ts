import { useSelector, useDispatch } from "react-redux";
import { selectItem } from "../../../redux/modules/resource";
import { RootState, ResourceState } from "../../../types";

const useViewer = () => {
	const dispatch = useDispatch();
	const { selectIndex, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);

	const handleClose = () => {
		dispatch(selectItem(null));
	};

	const getSrc = () => {
		if (selectIndex !== null) {
			const value = data[selectIndex].data;
			if (typeof value === "string") {
				return value;
			} else if (typeof value === "object") {
				const objURL = window.URL.createObjectURL(value);
				return objURL;
			}
		}
	};

	const getTitle = () => {
		return selectIndex !== null && data[selectIndex].name;
	};

	return {
		selectIndex,
		handleClose,
		getSrc,
		getTitle,
	};
};

export default useViewer;
