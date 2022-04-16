import React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingSvg } from "../../assets/Spinner-1s-200px.svg";
import useResourceState from "../../hooks/useResourceState";

const LoadingIcon = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const LoadingProgressBar = () => {
	const { loading } = useResourceState();

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
