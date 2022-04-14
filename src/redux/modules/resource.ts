import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";

interface ResourceType {
	type: "URL" | "IMG";
	resource: string | File;
}
interface ResourceState {
	data: ResourceType[];
}

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

const reducer = handleActions<ResourceState, ResourceType>(
	{
		PENDING: (state) => ({
			...state,
		}),
		SUCCESS: (state, action) => {
			const { payload } = action;

			return {
				...state,
				data: state.data.concat({
					type: payload.type,
					resource: payload.resource,
				}),
			};
		},
	},
	initialState,
	{ prefix }
);

export default reducer;

// sagas
export const { addLink } = createActions("ADD_LINK", { prefix });

function* addLinkSaga(action: Action<ResourceType>) {
	try {
		yield put(pending());
		const randomTimer = () => {
			setTimeout(() => {
				console.log("help");
			}, 1000);
		};
		yield call(randomTimer);
		yield put(success(action.payload));
	} catch (err) {
		yield put(fail(err));
	}
}

export function* resourceSaga() {
	yield takeEvery(`${prefix}/ADD_LINK`, addLinkSaga);
}
