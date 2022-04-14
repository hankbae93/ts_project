import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	z-index: 10;
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
	padding: 2px 0 0;
	font-size: 12px;
	background-color: #fff;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const AddUrlButton = styled(AddButton)``;
export const AddImgButton = styled(AddButton)`
	line-height: normal;

	& input {
		display: none;
	}
`;

export const AddLinkModal = styled.form`
	position: absolute;
	left: 10px;
	top: 42px;
	width: 260px;
	min-height: 40px;
	padding: 5px;
	background-color: #fff;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	box-sizing: border-box;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const AddInput = styled.input<{ error: boolean }>`
	width: 100%;
	height: 100%;
	padding: 8px;
	color: ${(props) => props.error && "red"};
	background: #f7f7f7;
	border: 1px solid ${(props) => (props.error ? "red" : "#e5e5e5")};
	border-radius: 5px;
	box-sizing: border-box;

	:focus {
		outline: none !important;
		border-color: ${(props) => (props.error ? "red" : "#38a5e1")};
	}
`;

export const AddLinkError = styled.p`
	margin-top: 5px;
	font-size: 12px;
	color: red;
`;
