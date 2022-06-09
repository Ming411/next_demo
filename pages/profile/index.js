// 文件夹直接就是路由名，可以访问
import React, {memo} from 'react';
import ProfileLayout from './layout';

const Profile = memo(() => {
  return <ProfileLayout></ProfileLayout>;
});
Profile.displayName = 'Profile';
export default Profile;
