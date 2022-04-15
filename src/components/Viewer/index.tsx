import React from "react";
import { useSelector } from "react-redux";
import { RootState, ResourceState } from "../../types";
import { Container, IframeContent, IframeHead } from "./style";

const Viewer = () => {
	const index = useSelector<RootState, number | null>(
		(state) => state.resource.selectIndex
	);

	if (index === null) {
		return <></>;
	}

	return (
		<Container>
			<IframeHead contentEditable>head</IframeHead>
			<IframeContent>내용</IframeContent>
		</Container>
	);
};

export default Viewer;
