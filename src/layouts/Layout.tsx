import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/ui/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="py-7 px-4 md:px-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
