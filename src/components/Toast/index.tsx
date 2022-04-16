import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToasts } from "../../redux/modules/resource";
import { RootState } from "../../types";
import { Container, ToastItem } from "./style";

const Toast = () => {
	const dispatch = useDispatch();
	const toast = useSelector<RootState, string[]>(
		(state) => state.resource.toast
	);

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
