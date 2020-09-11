import React from 'react';
import Slider from 'react-slick';
import { Button } from 'antd';
import { connect } from 'umi';
import styles from './index.less';

const Index = props => {
  const { isLogin, dispatch } = props;

  const login = () => {
    dispatch({
      type: 'user/setLoginStatus',
      payload: true,
    });
  };

  const loginOut = () => {
    dispatch({
      type: 'user/setLoginStatus',
      payload: false,
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="page contain">
      <h1>Page index</h1>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div>
        {isLogin ? (
          <Button onClick={loginOut}>登出</Button>
        ) : (
          <Button onClick={login}>登录</Button>
        )}
      </div>
    </div>
  );
};

export default connect(({ user }) => ({
  isLogin: user.isLogin,
}))(Index);
