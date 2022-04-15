import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypedIcon } from "typed-design-system";
import { selectItem } from "../../redux/modules/resource";
import { RootState, ResourceState } from "../../types";
import { Container, IframeContent, IframeHead, IframeClose } from "./style";

const Viewer = () => {
	const dispatch = useDispatch();
	const { selectIndex, data } = useSelector<RootState, ResourceState>(
		(state) => state.resource
	);

	const handleClose = () => {
		dispatch(selectItem(null));
	};

	if (selectIndex === null) {
		return <></>;
	}

	const getSrc = () => {
		if (selectIndex !== null) {
			const value = data[selectIndex].data;
			if (typeof value === "string") {
				return value;
			} else if (typeof value === "object") {
				const objURL = window.URL.createObjectURL(value);
				return objURL;
			}
		}
	};

	return (
		<Container>
			<IframeHead contentEditable>
				{selectIndex !== null && data[selectIndex].name}
				<IframeClose onClick={handleClose}>
					<TypedIcon icon='close_small' color='black' />
				</IframeClose>
			</IframeHead>
			<IframeContent src={getSrc()} />
		</Container>
	);
};

export default Viewer;
