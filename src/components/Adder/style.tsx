import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	gap: 10px;
	background-color: #fff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const AddButton = styled.button`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 30px;
	font-size: 12px;
	background-color: #fff;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	padding: 0;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	}
`;
