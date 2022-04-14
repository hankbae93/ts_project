import React from "react";
import ListItem from "../ListItem";
import { Container } from "./style";

const List = () => {
	return (
		<Container>
			{Array(15)
				.fill(1)
				.map((item) => (
					<ListItem />
				))}
		</Container>
	);
};

export default List;
