import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const IframeHead = styled.div`
	height: 50px;
	padding: 17px;
	background-color: #fff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
`;

export const IframeContent = styled.iframe`
	flex: 1;
`;
