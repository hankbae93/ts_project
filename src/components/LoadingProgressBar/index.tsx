import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../types";
import { ReactComponent as LoadingSvg } from "../../assets/Spinner-1s-200px.svg";

const LoadingIcon = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const LoadingProgressBar = () => {
	const loading = useSelector<RootState, boolean>(
		(state) => state.resource.loading
	);

	if (!loading) {
		return null;
	}

	return (
		<LoadingIcon>
			<LoadingSvg style={{ background: "none" }} />
		</LoadingIcon>
	);
};

export default LoadingProgressBar;
