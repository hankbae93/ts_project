import React from "react";
import { ResourceType } from "../../types";
import ListItem from "../ListItem";
import { Container } from "./style";

interface ListProps {
	list: ResourceType[];
}

const List = ({ list }: ListProps) => {
	return (
		<Container>
			{list.map((item) => (
				<ListItem data={item} />
			))}
		</Container>
	);
};

export default List;
