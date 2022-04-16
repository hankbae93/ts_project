import React from "react";
import { TypedIcon } from "typed-design-system";
import useViewer from "./hooks/useViewer";
import { Container, IframeContent, IframeHead, IframeClose } from "./style";

const Viewer = () => {
	const { selectId, handleClose, getSrc, getTitle } = useViewer();

	if (selectId === null) {
		return <></>;
	}

	return (
		<Container>
			<IframeHead>
				{getTitle()}
				<IframeClose onClick={handleClose}>
					<TypedIcon icon='close_small' color='black' />
				</IframeClose>
			</IframeHead>

			<IframeContent src={getSrc()} />
		</Container>
	);
};

export default Viewer;
