import React from "react";
import { ResourceObjType } from "../../types";
import { TypedIcon } from "typed-design-system";
import useListItem from "./useListItem";

import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const {
		isEdit,
		textEl,
		handleSelect,
		handleEdit,
		handleDelete,
		checkSelected,
	} = useListItem(value);

	return (
		<Container
			onClick={handleSelect}
			isSelect={checkSelected()}
			suppressContentEditableWarning={true}
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
