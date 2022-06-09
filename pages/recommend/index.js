import React, {memo} from 'react';
import {useRouter} from 'next/router';
const Recommend = memo(() => {
  const router = useRouter();
  console.log(router.query.id);

  // 获取路由中传递的参数
  return <div>Recommend:{router.query.id}</div>;
});
Recommend.displayName = 'Recommend';
export default Recommend;
