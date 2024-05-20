import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Overlay } from "./Overlay";
import routesConfig from "../routes/routesConfig";

function Header() {
  const location = useLocation();
  const { image, title, content } = routesConfig[location.pathname] || routesConfig['/']

  return (
    <>
      <Navbar />
      <header
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage:  `url(${image})` }}
      >
        <section className="w-full h-full flex items-center justify-center">
          <Overlay title={title} content={content}></Overlay>
        </section>
      </header>
    </>
  );
}

export default Header;
