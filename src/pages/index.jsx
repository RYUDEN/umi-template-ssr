import React from 'react';
import styles from './index.less';
import { connect } from 'umi'

const Index = (props) => {
  const { isLogin, dispatch } = props 

  const login = () => {
    dispatch({
      type:'user/setLoginStatus',
      payload:true
    })
  }

  const loginOut = () => {
    dispatch({
      type:'user/setLoginStatus',
      payload:false
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {
        isLogin?<button onClick={loginOut}>登出</button>:<button onClick={login}>登录</button>
      }
    </div>
  );
}

export default connect(({ user })=>({
  isLogin:user.isLogin
}))(Index)
