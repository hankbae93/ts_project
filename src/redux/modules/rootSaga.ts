import { all } from "redux-saga/effects";
import { resourceSaga } from "./resource";

export default function* rootSaga() {
	yield all([resourceSaga()]);
}
