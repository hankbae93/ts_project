import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ResourceObjType, RootState } from "../../types";

import Adder from "../Adder";
import List from "../List";

const SideBar = () => {
	const list = useSelector<RootState, ResourceObjType[]>(
		(state) => state.resource.data
	);

	return (
		<Container>
			<Adder />
			<List list={list} />
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
