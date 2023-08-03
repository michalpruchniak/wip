import Footer from "./_partials/_footer";
import Nav from "./_partials/_nav";
import Main from "./_partials/_main";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
