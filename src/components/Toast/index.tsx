import React, { useEffect } from "react";
import useResourceState from "../../hooks/useResourceState";
import { deleteToasts } from "../../redux/modules/resource";
import { Container, ToastItem } from "./style";

const Toast = () => {
	const { dispatch, toast } = useResourceState();

	useEffect(() => {
		if (toast.length > 0) {
			setTimeout(() => {
				dispatch(deleteToasts());
			}, 3000);
		}
	}, [toast, dispatch]);

	return (
		<Container>
			{toast.map((message, i) => {
				return (
					<ToastItem key={i} isSuccess={message === "성공"}>
						{message}
					</ToastItem>
				);
			})}
		</Container>
	);
};

export default Toast;
