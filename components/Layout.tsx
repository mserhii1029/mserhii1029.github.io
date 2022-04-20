import Header from "./Header";
import Head from 'next/head';

const Layout = (props: any) => {
  return (
    <>
      <Header
        title={props.title}
        des={props.des}
        can={props.can}
        image={props.image}
      />
      <main className="parallax">
        {props.children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;