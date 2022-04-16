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
			const index = data.findIndex((v) => v.id === selectIndex);
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
		if (selectIndex !== null) {
			const index = data.findIndex((v) => v.id === selectIndex);
			return data[index].name;
		}
	};

	return {
		selectIndex,
		handleClose,
		getSrc,
		getTitle,
	};
};

export default useViewer;
