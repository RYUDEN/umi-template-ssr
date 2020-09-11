const User = {
    namespace:'user',
    state:{
        isLogin:false
    },
    effects :{
        *setLoginStatus({ payload }, { put }) {
            yield put({
                type:'changeLogin',
                payload
            })
        }
    },
    reducers: {
        changeLogin(state, action) {
            return {
                ...state,
                isLogin:action.payload
            }
        }
    }
}
export default User;