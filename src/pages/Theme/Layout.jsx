import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="child content">Content</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
