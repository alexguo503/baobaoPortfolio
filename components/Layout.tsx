// import Footer from "./footer";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
