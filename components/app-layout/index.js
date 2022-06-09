import React, {memo} from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AppLayout = memo(props => {
  return (
    <div className='demo'>
      <Head>
        <title>网易云App</title>
      </Head>
      <header>
        {/* 服务端渲染 */}
        <a href='/about'>about</a>
        {/* 前端渲染/客户端渲染 */}
        <Link href='/about'>
          <button>about</button>
        </Link>
        <Link href='/profile'>
          <button>我的</button>
        </Link>
        <hr />
      </header>

      {props.children}

      <footer>
        <hr />
        网站footer
      </footer>
    </div>
  );
});
AppLayout.displayName = 'AppLayout';
export default AppLayout;
