import { all } from "redux-saga/effects";
import tasksSaga from "./features/Tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ])
};