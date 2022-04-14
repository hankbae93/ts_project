import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLink as addLinkSagaStart } from "../../redux/modules/resource";

const useLinkModal = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const pattern =
		/^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;

	const regex = new RegExp(pattern);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { value } = e.currentTarget.children[0] as HTMLInputElement;

		console.log(value, regex.test(value));

		if (regex.test(value)) {
			setIsOpen(false);
			dispatch(addLinkSagaStart(value));
			setError(false);
		} else {
			setError(true);
		}
	};

	return { onSubmit, isOpen, setIsOpen, error };
};

export default useLinkModal;
