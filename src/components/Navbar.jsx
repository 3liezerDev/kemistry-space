
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path 
      ? 'text-pink-500 font-semibold hover:text-pink-300'
      : 'text-white font-semibold hover:text-gray-300';
  };
  return (
    <nav className="bg-black bg-opacity-50 shadow-md absolute w-full">
    <div className="container w-[80%] mx-auto flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src="../../public/kemistry-logo.svg" alt="Kemistry Space Logo" className="h-24" />
      </Link>
      <ul className="flex items-center space-x-6">
        <li><Link to="/about" className={getLinkClasses('/about')}>ABOUT</Link></li>
        <li><Link to="/kactivities" className={getLinkClasses('/kactivities')}>K-ACTIVITIES</Link></li>
        <li><Link to="/kevents" className={getLinkClasses('/kevents')}>K-EVENTS</Link></li>
        <li><Link to="/kworkshops" className={getLinkClasses('/kworkshops')}>K-WORKSHOPS</Link></li>
        <li><Link to="/kemistryfestival" className={getLinkClasses('/kemistryfestival')}>KEMISTRY FESTIVAL</Link></li>
        <li><Link to="/contact" className="text-white font-semibold bg-pink-500 hover:bg-pink-600 rounded-full px-4 py-2">CONTACT</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
