import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { ResourceType, ResourceObjType, ResourceState } from "../../types";
import { getRandomDelay, getRandom } from "../../utils/getRandom";

const initialState: ResourceState = {
	data: [
		{
			name: "https://www.robinwieruch.de/react-libraries/",
			data: "https://www.robinwieruch.de/react-libraries/",
		},
		{
			name: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
			data: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
		},
	],
	loading: false,
	toast: [],
	selectIndex: null,
};

const prefix = "resource";

export const {
	pending,
	success,
	fail,
	update,
	deleteItem,
	deleteToasts,
	selectItem,
} = createActions(
	"PENDING",
	"SUCCESS",
	"FAIL",
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
		}),
		SUCCESS: (state, action) => {
			const { payload } = action;
			const newData = [...payload];
			return {
				...state,
				data: newData.concat([...state.data]),
			};
		},
		FAIL: (state, action) => {
			console.log(action.payload);
			return {
				...state,
				toast: state.toast.concat(action.payload),
			};
		},
		UPDATE: (state, action) => {
			const index = state.data.findIndex((v) => {
				return v.data === action.payload.data;
			});
			const newState = [...state.data];
			newState[index] = action.payload;

			return {
				...state,
				data: newState,
			};
		},
		DELETE_ITEM: (state, action) => {
			const newState = [...state.data].filter((v) => {
				return v.data !== action.payload.data;
			});

			return {
				...state,
				data: newState,
			};
		},
		DELETE_TOASTS: (state) => {
			return {
				...state,
				toast: [],
			};
		},
		SELECT_ITEM: (state, action) => {
			return {
				...state,
				selectIndex: action.payload,
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

function* addLinkSaga(action: Action<ResourceType>) {
	try {
		yield put(pending());
		yield call(getRandomDelay);
		const isValidate = getRandom();
		if (!isValidate) {
			throw new Error("실패");
		}
		const data = { name: action.payload, data: action.payload };
		yield put(success([data]));
	} catch (err) {
		yield put(fail(err));
	}
}

function getValidation(datas: File[]) {
	return Promise.all(
		datas.map(async (v: File) => {
			const isValidate = await getRandom();
			return isValidate && { name: v.name, data: v };
		})
	);
}

function* addImgSaga(action: Action<File[]>) {
	try {
		yield put(pending());
		const datas: (ResourceObjType | false)[] = yield call(() =>
			getValidation(action.payload)
		);

		yield put(
			fail(
				datas.map((v) => {
					return v ? "성공" : "실패";
				})
			)
		);
		yield put(success(datas.filter((v) => v !== false)));
	} catch (err) {
		yield put(fail(err));
	}
}

export function* resourceSaga() {
	yield takeEvery(`${prefix}/ADD_LINK`, addLinkSaga);
	yield takeEvery(`${prefix}/ADD_IMG`, addImgSaga);
}
