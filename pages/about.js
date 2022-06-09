import Head from 'next/head';
// 文件名就是对应的路由 /about
import React, {memo} from 'react';
import AppLayout from '../components/app-layout/index';

const About = memo(() => {
  return (
    <AppLayout>
      <h2>about</h2>
      <p>测试一下</p>

      {/* next 默认集成了css in js,也可以使用styled-components */}
      <style>
        {`
         p {
          color:blue
          }
         `}
      </style>
    </AppLayout>
  );
});
//显示的名称
About.displayName = 'About';
export default About;
