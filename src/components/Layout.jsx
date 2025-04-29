import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
    );
};
export default Layout;