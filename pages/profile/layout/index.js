import Link from 'next/link';
import React, {memo} from 'react';

const ProfileLayout = memo(props => {
  return (
    <div>
      <h2>ProfileLayout</h2>
      <Link href='/profile/info'>
        <a>信息</a>
      </Link>
      <Link href='/profile/settings'>
        <a>设置</a>
      </Link>
      {props.children}
    </div>
  );
});
ProfileLayout.displayName = 'ProfileLayout';
export default ProfileLayout;
