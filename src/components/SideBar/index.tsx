import React from "react";
import styled from "styled-components";

import Adder from "../Adder";
import List from "../List";

const SideBar = () => {
	return (
		<Container>
			<Adder />
			<List />
		</Container>
	);
};

export default SideBar;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 100vh;
	background-color: #f7f7f7;
`;
