import { useState, useEffect } from "react";
import useResourceState from "../../../hooks/useResourceState";
import {
	deleteItem,
	selectItem,
	update,
} from "../../../redux/modules/resource";
import { ResourceObjType } from "../../../types";

const useListItem = (value: ResourceObjType) => {
	const { selectId, dispatch } = useResourceState();
	const [text, setText] = useState(value.name);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setText(value.name);
	}, [value]);

	const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		dispatch(selectItem(value.id));
	};

	const handleEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		if (isEdit) {
			dispatch(update({ ...value, name: text }));
		}
		setIsEdit((prev) => !prev);
	};

	const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		dispatch(deleteItem(value.id));
	};

	const checkSelected = () => {
		return selectId === value.id;
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (isEdit) {
				dispatch(update({ ...value, name: text }));
			}
			setIsEdit((prev) => !prev);
		}
	};

	return {
		isEdit,
		text,
		onChange,
		onKeyUp,
		handleSelect,
		handleEdit,
		handleDelete,
		checkSelected,
	};
};

export default useListItem;
