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
	height: 50px;
	margin-bottom: 10px;
	font-weight: 500;
	background-color: ${({ isSuccess }) => (isSuccess ? "#6BCB77" : "#FF6B6B")};
`;
