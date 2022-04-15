import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, selectItem, update } from "../../redux/modules/resource";
import { ResourceObjType, ResourceState, RootState } from "../../types";
import { TypedIcon } from "typed-design-system";

import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const { selectIndex, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const textEl = useRef() as React.MutableRefObject<HTMLDivElement>;

	const handleSelect = () => {
		const index = data.findIndex((v) => v.data === value.data);
		dispatch(selectItem(index));
	};

	const handleEdit = () => {
		if (isEdit && textEl.current) {
			const newValue = textEl.current.textContent;
			dispatch(update({ name: newValue, data: value.data }));
		}
		setIsEdit((prev) => !prev);
	};

	const handleDelete = () => {
		dispatch(deleteItem(value));
	};

	return (
		<Container
			onClick={handleSelect}
			isSelect={selectIndex !== null && data[selectIndex].data === value.data}
		>
			<ItemTitle ref={textEl} contentEditable={isEdit}>
				{value.name}
			</ItemTitle>

			<ItemTools>
				<ItemButton onClick={handleEdit}>
					<TypedIcon icon='edit_small' color='black' />
				</ItemButton>
				<ItemButton delete onClick={handleDelete}>
					<TypedIcon icon='trash_small' color='black' />
				</ItemButton>
			</ItemTools>
		</Container>
	);
};

export default ListItem;
