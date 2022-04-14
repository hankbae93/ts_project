import React from "react";
import { TypedIcon } from "typed-design-system";
import { Container, ItemTitle, ItemTools, ItemButton } from "./style";

const ListItem = () => {
	return (
		<Container>
			<ItemTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error nemo
				deleniti quibusdam aperiam accusantium similique enim libero quia
				tenetur sed nesciunt, consequatur at, delectus temporibus qui, rem dicta
				dolores.
			</ItemTitle>

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
