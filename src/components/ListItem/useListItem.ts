import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, selectItem, update } from "../../redux/modules/resource";
import { ResourceObjType, ResourceState, RootState } from "../../types";

const useListItem = (value: ResourceObjType) => {
	const dispatch = useDispatch();
	const { selectIndex, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);
	const [isEdit, setIsEdit] = useState(false);
	const textEl = useRef() as React.MutableRefObject<HTMLDivElement>;

	const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		const index = data.findIndex((v) => v.data === value.data);
		dispatch(selectItem(index));
	};

	const handleEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		if (isEdit && textEl.current) {
			const newValue = textEl.current.textContent;
			dispatch(update({ name: newValue, data: value.data }));
		}
		setIsEdit((prev) => !prev);
	};

	const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		dispatch(deleteItem(value));
	};

	const checkSelected = () => {
		return selectIndex !== null && data[selectIndex].data === value.data;
	};

	return {
		isEdit,
		textEl,
		handleSelect,
		handleEdit,
		handleDelete,
		checkSelected,
	};
};

export default useListItem;
