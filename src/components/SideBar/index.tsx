import React from "react";
import styled from "styled-components";
import useResourceState from "../../hooks/useResourceState";

import Adder from "../Adder";
import List from "../List";

const SideBar = () => {
	const { data } = useResourceState();

	return (
		<Container>
			<Adder />
			<List list={data} />
		</Container>
	);
};

export default SideBar;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 10;
	width: 280px;
	height: 100vh;
	background-color: #f7f7f7;
	box-shadow: 1px 1px 1px #c4c4c4;
`;
