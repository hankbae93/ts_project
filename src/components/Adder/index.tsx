import React from "react";
import {
	Container,
	AddUrlButton,
	AddImgButton,
	AddLinkModal,
	AddInput,
	AddLinkError,
} from "./style";
import useImgButton from "./hooks/useImgButton";
import useLinkModal from "./hooks/useLinkModal";

const Adder = () => {
	const { onSubmit, isOpen, setIsOpen, error } = useLinkModal();
	const { onChange } = useImgButton();

	const handleUrlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	return (
		<Container>
			<AddUrlButton onClick={handleUrlClick}>URL 추가</AddUrlButton>
			<AddImgButton as='label' htmlFor='file'>
				이미지 추가
				<input
					id='file'
					type='file'
					accept='image/jpeg, image/png'
					multiple
					onChange={onChange}
				/>
			</AddImgButton>

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
