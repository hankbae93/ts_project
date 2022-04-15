import React from "react";
import useImgButton from "./hooks/useImgButton";
import { AddImgButton } from "./style";

const AdderImg = () => {
	const { onChange } = useImgButton();

	return (
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
	);
};

export default AdderImg;
