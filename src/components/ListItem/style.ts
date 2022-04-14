import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 10px;
	width: 260px;
	height: 90px;
	background: #ffffff;
	border-radius: 10px;
	padding: 12px;
	box-sizing: border-box;
`;

export const ItemTitle = styled.p`
	display: -webkit-box;
	width: 100%;
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

export const ItemTools = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const ItemButton = styled.span`
	font-size: 19px;
`;
