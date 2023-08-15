import { Outlet } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import Footer from "./Footer";

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FirstLayout;
