import React from "react";
import useLinkModal from "./hooks/useLinkModal";
import { AddUrlButton, AddLinkModal, AddInput, AddLinkError } from "./style";

const AdderUrl = () => {
	const { onSubmit, isOpen, setIsOpen, error } = useLinkModal();

	const handleUrlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<AddUrlButton onClick={handleUrlClick}>URL 추가</AddUrlButton>
			{isOpen && (
				<AddLinkModal onSubmit={onSubmit}>
					<AddInput error={error} />
					{error && <AddLinkError>올바른 형식의 URL을 입력하세요</AddLinkError>}
				</AddLinkModal>
			)}
		</>
	);
};

export default AdderUrl;
