import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TypedIcon } from "typed-design-system";
import { update } from "../../redux/modules/resource";
import { ResourceObjType } from "../../types";
import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState<string>(value.name);
	const [isEdit, setIsEdit] = useState(false);
	const textEl = useRef() as React.MutableRefObject<HTMLDivElement>;

	const handleEdit = () => {
		if (isEdit && textEl.current) {
			const newValue = textEl.current.textContent;
			dispatch(update({ name: newValue, data: value.data }));
		}
		setIsEdit((prev) => !prev);
	};

	return (
		<Container>
			<ItemTitle ref={textEl} contentEditable={isEdit}>
				{title}
			</ItemTitle>

			<ItemTools>
				<ItemButton onClick={handleEdit}>
					<TypedIcon icon='edit_small' color='black' />
				</ItemButton>
				<ItemButton>
					<TypedIcon icon='trash_small' color='black' />
				</ItemButton>
			</ItemTools>
		</Container>
	);
};

export default ListItem;
