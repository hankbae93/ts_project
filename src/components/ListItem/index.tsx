import React, { useState } from "react";
import { TypedIcon } from "typed-design-system";
import { ResourceObjType } from "../../types";
import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const [title, setTitle] = useState<string>(value.name);

	return (
		<Container>
			<ItemTitle>{title}</ItemTitle>

			<ItemTools>
				<ItemButton>
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
