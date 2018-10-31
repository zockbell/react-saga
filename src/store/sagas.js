import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios';

function* fetchUser(){

    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch(err) {
        console.log(err,'1111')
    }

}

function* GeneratorSaga() {
    yield takeEvery(GET_INIT_LIST, fetchUser);
}

export default GeneratorSaga;