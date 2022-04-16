import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteItem,
	selectItem,
	update,
} from "../../../redux/modules/resource";
import { ResourceObjType, ResourceState, RootState } from "../../../types";

const useListItem = (value: ResourceObjType) => {
	const dispatch = useDispatch();
	const { selectId, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);
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

	return {
		isEdit,
		text,
		onChange,
		handleSelect,
		handleEdit,
		handleDelete,
		checkSelected,
	};
};

export default useListItem;
