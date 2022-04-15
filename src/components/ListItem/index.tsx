import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, update } from "../../redux/modules/resource";
import { ResourceObjType } from "../../types";
import { TypedIcon } from "typed-design-system";

import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const textEl = useRef() as React.MutableRefObject<HTMLDivElement>;

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
		<Container>
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
