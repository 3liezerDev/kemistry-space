import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";

function Header() {
  const location = useLocation();
  
  let backgroundImage;

  switch (location.pathname) {
    case '/about':
      backgroundImage = 'url("/src/assets/images/Banner-about.jpg")';
      break;
    case '/kactivities':
      backgroundImage = 'url("/src/assets/images/Banner-k-activities.jpg")';
      break;
    case '/kevents':
      backgroundImage = 'url("/src/assets/images/Banner-k-events.jpg")';
      break;
    case '/kworkshops':
      backgroundImage = 'url("/src/assets/images/Banner-k-workshops.jpg")';
      break;
    case '/kemistryfestival':
      backgroundImage = 'url("/src/assets/images/Banner-kemistry-festival.jpg")';
      break;
    case '/contact':
      backgroundImage = 'url("/src/assets/images/Banner-contact.jpg")';
      break;
    default:
      backgroundImage = 'url("/src/assets/images/Banner-home.jpg")';
      break;
  }

  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage }}>
      <Navbar />
    </section>
  );
}

export default Header;



