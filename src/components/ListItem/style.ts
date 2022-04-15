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

export const ItemTitle = styled.div<{ isEdit: boolean }>`
	display: ${({ isEdit }) => (isEdit ? "none" : "-webkit-box")};
	overflow: hidden;
	font-size: 14px;
	line-height: 16px;
	word-break: break-all;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

export const ItemEditTitle = styled.input<{ isEdit: boolean }>`
	display: ${({ isEdit }) => (isEdit ? "flex" : "none")};
	position: relative;
	top: -9px;
	left: -8px;
	padding: 8px 6px;
	width: 250px;
	height: 30px;
	font-size: 14px;
	border: 1px solid #38a5e1;
	box-sizing: border-box;
	border-radius: 3px;

	&:focus {
		outline: none;
	}
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
