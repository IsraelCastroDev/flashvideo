import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/ui/Header/Header";

function LayoutMovie() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default LayoutMovie;
