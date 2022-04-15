import React from "react";
import { ResourceObjType } from "../../types";
import ListItem from "../ListItem";
import { Container } from "./style";

interface ListProps {
	list: ResourceObjType[];
}

const List = ({ list }: ListProps) => {
	return (
		<Container>
			{list.map((value, index) => (
				<ListItem key={index} value={value} />
			))}
		</Container>
	);
};

export default List;
