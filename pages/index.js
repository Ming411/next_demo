import Link from 'next/link';
import {useEffect} from 'react';
import axios from 'axios';
// 模块样式，不会直接给所有对应的类名加上样式，有固定的用法
import styles from '../styles/Home.module.css';
import AppLayout from '../components/app-layout/index';
import Router from 'next/router';

// 对应路由  / 首页
const Home = function (props) {
  // 编程式导航
  const recommendItemClick = item => {
    Router.push({
      pathname: '/recommend',
      query: {
        id: item
      }
    });
  };
  const {name, banners} = props;
  console.log(name, banners);
  return (
    <AppLayout>
      <h1 className={styles.title}>Home</h1>
      <h2>Banner</h2>
      {/* 以下样式不生效 */}
      <h2 className='title'>推荐数据</h2>
      <ul>
        {[1, 2, 3].map((item, index) => {
          return (
            // 路由传参
            // <Link key={item} href={`/recommend?id=${item}`}>
            //   <li>推荐{item}</li>
            // </Link>

            <li key={item} onClick={() => recommendItemClick(item)}>
              推荐{item}
            </li>
          );
        })}
      </ul>
    </AppLayout>
  );
};

// 在组件渲染前执行
Home.getInitialProps = async props => {
  const res = await axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  });
  // 最终会注入到组件的props中
  return {
    name: 'ccc',
    banners: res.data.data.banner.list
  };
};

export default Home;
