import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="py-7 px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
