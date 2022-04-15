import styled from "styled-components";

export const Container = styled.div<{ isSelect: boolean }>`
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

	${({ isSelect }) =>
		isSelect &&
		`
		border: 1px solid #38A5E1;
	`}
`;

export const ItemTitle = styled.div`
	flex: 1;
	width: 100%;
	font-size: 14px;
	overflow: hidden;
	display: -webkit-box;
	word-break: break-all;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	box-sizing: border-box;

	${({ contentEditable }) =>
		contentEditable &&
		`
	border: 1px solid #38A5E1;
	`}
`;

export const ItemTools = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const ItemButton = styled.span<{ delete?: boolean }>`
	font-size: 19px;
	cursor: pointer;
`;
