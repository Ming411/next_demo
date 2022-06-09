import '../styles/globals.css';
import '../styles/app.css'; // 此处的样式作用于所有的子组件

function MyApp({Component, pageProps}) {
  // 也可以在这里写路由操作，header和footer
  return (
    <div>
      <h2>header</h2>
      <Component {...pageProps} />
      <h2>footer</h2>
    </div>
  );
}

export default MyApp;
