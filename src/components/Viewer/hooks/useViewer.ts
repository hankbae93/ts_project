import useResourceState from "../../../hooks/useResourceState";
import { selectItem } from "../../../redux/modules/resource";

const useViewer = () => {
	const { dispatch, selectId, data } = useResourceState();

	const handleClose = (): void => {
		dispatch(selectItem(null));
	};

	const getSrc = () => {
		if (selectId !== null) {
			const index = data.findIndex((v) => v.id === selectId);
			const value = data[index].data;
			if (typeof value === "string") {
				return { data: value, type: "iframe" };
			} else if (typeof value === "object") {
				const objURL = window.URL.createObjectURL(value);
				return { data: objURL, type: "img" };
			}

			return null;
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
