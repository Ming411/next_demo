import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }
  // 直接改变文档内容的组件
  render() {
    return (
      <Html lang='zh'>
        <Head />
        <body>
          <h2>哈哈哈哈</h2>
          {/* main就是app显示的内容 */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
