import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	right: 10px;
	bottom: 10px;
	max-height: 50vh;
	overflow-y: scroll;
`;

export const ToastItem = styled.div<{ isSuccess: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 150px;
	margin-bottom: 10px;
	padding: 10px;
	background-color: ${({ isSuccess }) => (isSuccess ? "#6BCB77" : "#FF6B6B")};
	word-break: break-all;
	font-weight: 500;
	border-radius: 5px;
	box-sizing: border-box;
`;
