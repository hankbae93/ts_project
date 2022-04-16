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
	background-color: ${({ isSuccess }) => (isSuccess ? "#6BCB77" : "#FF6B6B")};
	font-weight: 500;
	border-radius: 5px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
`;
