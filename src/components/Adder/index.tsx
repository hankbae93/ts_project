import React from "react";
import {
	Container,
	AddButton,
	AddLinkModal,
	AddInput,
	AddLinkError,
} from "./style";
import useLinkModal from "./useLinkModal";

const Adder = () => {
	const { onSubmit, isOpen, setIsOpen, error } = useLinkModal();

	const handleUrlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	return (
		<Container>
			<AddButton onClick={handleUrlClick}>URL 추가</AddButton>
			<AddButton>이미지 추가</AddButton>

			{isOpen && (
				<AddLinkModal onSubmit={onSubmit}>
					<AddInput error={error} />
					{error && <AddLinkError>올바른 형식의 URL을 입력하세요</AddLinkError>}
				</AddLinkModal>
			)}
		</Container>
	);
};

export default Adder;
