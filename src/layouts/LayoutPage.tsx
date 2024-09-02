import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header/Header";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer";

function LayoutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row gap-4 px-4 md:px-10 py-2 md:py-7 min-h-[calc(100vh-80px)]">
        <Filters />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default LayoutPage;
