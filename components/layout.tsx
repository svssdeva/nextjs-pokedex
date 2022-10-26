import Navbar from './navbar';
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar /> <div> {children}</div>
    </>
  );
};

export default Layout;
