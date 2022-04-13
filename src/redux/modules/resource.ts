import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";

const initialState = {
	data: [],
};

const prefix = "Typed/resource";

export const { pending, success, failure, update, initialize } = createActions(
	"PENDING",
	"SUCCESS",
	"FAILURE",
	"UPDATE",
	{
		prefix,
	}
);

const reducer = handleActions({}, initialState, { prefix });

export default reducer;

export function* resourceSaga() {
	// yield takeEvery(`${prefix}/GET_AROUND`, getAroundSaga);
}
