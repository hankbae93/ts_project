import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { ResourceType, ResourceObjType, ResourceState } from "../../types";
import { getRandomDelay, getRandom } from "../../utils/getRandom";

const initialState: ResourceState = {
	data: [],
};

const prefix = "resource";

export const { pending, success, fail } = createActions(
	"PENDING",
	"SUCCESS",
	"FAIL",
	{
		prefix,
	}
);

const reducer = handleActions<ResourceState, ResourceObjType>(
	{
		PENDING: (state) => ({
			...state,
		}),
		SUCCESS: (state, action) => {
			const { payload } = action;
			return {
				...state,
				data: state.data.concat(payload),
			};
		},
		FAIL: (state) => ({
			...state,
		}),
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
		console.log(data);
		yield put(success(data));
	} catch (err) {
		yield put(fail(err));
	}
}

function getDatas(datas: ResourceType[]) {
	return Promise.all(
		datas.map(async (v: ResourceType) => {
			await getRandom();
			const isValidate = getRandom();

			return isValidate && v;
		})
	);
}

function* addImgSaga(action: Action<ResourceType[]>) {
	try {
		yield put(pending());
		const datas: (ResourceType | false)[] = yield call(() =>
			getDatas(action.payload)
		);
		const fasleCount = datas.filter((v) => v === false);
		console.log(datas, fasleCount);
		yield put(success(datas.filter((v) => v !== false)));
	} catch (err) {
		yield put(fail(err));
	}
}

export function* resourceSaga() {
	yield takeEvery(`${prefix}/ADD_LINK`, addLinkSaga);
	yield takeEvery(`${prefix}/ADD_IMG`, addImgSaga);
}
