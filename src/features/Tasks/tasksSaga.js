import { takeEvery, call, select } from 'redux-saga/effects';
import { setTasksInLocalStorage } from './tasksLocalStorage';
import { selectTasks } from './tasksSlice';

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(setTasksInLocalStorage, tasks.tasks)
};

function* tasksSaga() {
    yield takeEvery("*", saveTasksToLocalStorageHandler);
};

export default tasksSaga;