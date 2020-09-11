import React from 'react';
import { history, NavLink, connect } from 'umi';
import './layout.less';
const GlobalHeader = props => {
  const { isLogin } = props;
  return (
    <div className="full-width">
      <div className="contain">
        <div className="nav global-nav">
          <h5>logo</h5>
          <NavLink
            exact
            className="nav-item"
            activeClassName="selected"
            to={'/home'}
          >
            home
          </NavLink>
          <NavLink
            exact
            className="nav-item"
            activeClassName="selected"
            to={'/about'}
          >
            about
          </NavLink>
          <span>{isLogin ? '已登录' : '未登录'}</span>
        </div>
      </div>
    </div>
  );
};
export default connect(({ user }) => ({
  isLogin: user.isLogin,
}))(GlobalHeader);
