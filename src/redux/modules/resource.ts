import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { ResourceObjType, ResourceState } from "../../types";
import { v4 as uuidv4 } from "uuid";
import {
	getRandomDelay,
	getRandom,
	getRandomTime,
} from "../../utils/getRandom";

const initialState: ResourceState = {
	data: [
		{
			id: uuidv4(),
			name: "https://www.robinwieruch.de/react-libraries/",
			data: "https://www.robinwieruch.de/react-libraries/",
		},
		{
			id: uuidv4(),
			name: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
			data: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
		},
	],
	loading: false,
	toast: [],
	selectId: null,
};

const prefix = "resource";

export const {
	pending,
	success,
	notice,
	update,
	deleteItem,
	deleteToasts,
	selectItem,
} = createActions(
	"PENDING",
	"SUCCESS",
	"NOTICE",
	"UPDATE",
	"DELETE_ITEM",
	"DELETE_TOASTS",
	"SELECT_ITEM",
	{
		prefix,
	}
);

const reducer = handleActions<ResourceState, any>(
	{
		PENDING: (state) => ({
			...state,
			loading: true,
		}),
		SUCCESS: (state, action) => {
			const { payload } = action;
			const newData = [...payload];
			return {
				...state,
				loading: false,
				data: newData.concat([...state.data]),
			};
		},
		NOTICE: (state, action: Action<string[]>) => {
			return {
				...state,
				toast: state.toast.concat(action.payload),
			};
		},
		UPDATE: (state, action: Action<ResourceObjType>) => {
			const index = state.data.findIndex((v) => {
				return v.id === action.payload.id;
			});
			const newState = [...state.data];
			newState[index].name = action.payload.name;

			return {
				...state,
				data: newState,
			};
		},
		DELETE_ITEM: (state, action: Action<string>) => {
			const newState = [...state.data].filter((v) => {
				return v.id !== action.payload;
			});

			return {
				...state,
				data: newState,
				selectId: action.payload === state.selectId ? null : state.selectId,
			};
		},
		DELETE_TOASTS: (state) => {
			return {
				...state,
				toast: [],
			};
		},
		SELECT_ITEM: (state, action: Action<string>) => {
			return {
				...state,
				selectId: action.payload,
			};
		},
	},
	initialState,
	{ prefix }
);

export default reducer;

// sagas
export const { addLink, addImg } = createActions("ADD_LINK", "ADD_IMG", {
	prefix,
});

function* addLinkSaga(action: Action<string>) {
	try {
		yield put(pending());
		yield call(getRandomDelay);
		const isValidate = getRandom();
		if (!isValidate) throw new Error();

		const { payload } = action;
		let result = payload;
		if (payload.includes("www.youtube.com")) {
			const params = new URL(payload).searchParams;
			let v = params.get("v");
			result = `https://www.youtube.com/embed/${v}`;
		}
		const data = { id: uuidv4(), name: payload, data: result };
		yield put(notice(["성공"]));
		yield put(success([data]));
	} catch (err) {
		yield put(notice(["실패"]));
	}
}

function getValidation(datas: Promise<File>[]) {
	return Promise.all(
		datas.map(async (v: Promise<File>) => {
			const result = await v;
			const isValidate = getRandom();
			const data = { id: uuidv4(), name: result.name, data: result };
			return isValidate && data;
		})
	);
}

function* addImgSaga(action: Action<File[]>) {
	try {
		yield put(pending());

		let totalDelay = 0;
		const promiseArr: Promise<File>[] = action.payload.map((v) => {
			const time = getRandomTime();
			totalDelay += time;
			return new Promise((resolve) => setTimeout(resolve, totalDelay)).then(
				() => {
					console.log(`${time} delay`);
					return v;
				}
			);
		});
		console.time("promise start");
		const datas: (ResourceObjType | false)[] = yield call(() =>
			getValidation(promiseArr)
		);
		console.timeEnd("promise start");

		yield put(
			notice(
				datas.map((v) => {
					return v ? "성공" : "실패";
				})
			)
		);
		yield put(success(datas.filter((v) => v !== false)));
	} catch (err) {
		console.log(err);
	}
}

export function* resourceSaga() {
	yield takeEvery(`${prefix}/ADD_LINK`, addLinkSaga);
	yield takeEvery(`${prefix}/ADD_IMG`, addImgSaga);
}
