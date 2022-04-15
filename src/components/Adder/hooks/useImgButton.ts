import { useDispatch } from "react-redux";
import { addImg as addImgSagaStart } from "../../../redux/modules/resource";

const useImgButton = () => {
	const dispatch = useDispatch();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { files },
		} = e;
		if (files) {
			const datas = Array.from(files);
			console.log(datas);
			dispatch(addImgSagaStart(datas));
		}
	};

	return { onChange };
};

export default useImgButton;
