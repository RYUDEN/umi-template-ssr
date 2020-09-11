import React from 'react';
import { connect } from 'umi';
const Authration = props => {
  const { children, isLogin } = props;
  const Forbidden = <div className="contain page">403</div>;

  return isLogin ? children : Forbidden;
};

export default connect(({ user }) => ({
  isLogin: user.isLogin,
}))(Authration);
