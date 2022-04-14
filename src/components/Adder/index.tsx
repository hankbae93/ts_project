import React from "react";
import { Container, AddButton } from "./style";

const Adder = () => {
	return (
		<Container>
			<AddButton>URL 추가</AddButton>
			<AddButton>이미지 추가</AddButton>
		</Container>
	);
};

export default Adder;
