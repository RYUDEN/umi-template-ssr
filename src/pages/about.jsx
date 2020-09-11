import React from 'react';
import { Prompt } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>
      <Prompt message="你确定要离开么？" />
      {
        // <Prompt
        // message={ location => {
        //   return location.pathname !== "/home" ? true : `您确定要跳转到首页么？`;
        // }}
        // />
      }
      <h1 className={styles.title}>Page about</h1>
    </div>
  );
}
