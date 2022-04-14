import React from "react";
import { TypedIcon } from "typed-design-system";
import { ResourceType } from "../../types";
import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

interface ListItemProps {
	data: ResourceType;
}

const ListItem = ({ data }: ListItemProps) => {
	return (
		<Container>
			<ItemTitle>{typeof data === "string" ? data : data.name}</ItemTitle>

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
