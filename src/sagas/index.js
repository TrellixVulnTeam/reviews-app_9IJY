import { takeEvery } from 'redux-saga/effects'

// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`
function* fetchReviews() {
  let arr = [{ id: 1, name: 'Vlad' }]
  return arr
  //    try {
  //       const user = yield call(Api.fetchUser, action.payload.userId);
  //       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  //    } catch (e) {
  //       yield put({type: "USER_FETCH_FAILED", message: e.message});
  //    }
}
/*
  Запускаем `fetchUser` на каждый задиспатченое действие `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchReviews)
}
export default mySaga
