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
	flex: 1;
	font-size: 14px;
	white-space: normal;

	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ItemTools = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const ItemButton = styled.span`
	font-size: 19px;
	cursor: pointer;
`;
