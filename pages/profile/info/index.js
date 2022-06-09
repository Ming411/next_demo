// 嵌套路由 /profile/info

import React, {memo} from 'react';
// 使用第三方包styled来编写样式
// 注意，在next服务端渲染中需要额外配置
// npm i babel-plugin-styled-components -D
import {ProfileWrapper} from './style';
import ProfileLayout from '../layout';

const ProfileInfo = memo(() => {
  return (
    <ProfileLayout>
      <ProfileWrapper>
        <span>whyccc</span>
      </ProfileWrapper>
    </ProfileLayout>
  );
});
ProfileInfo.displayName = 'ProfileInfo';
export default ProfileInfo;
