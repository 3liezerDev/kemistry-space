
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 shadow-md">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src="../../public/kemistry-logo.svg" alt="Kemistry Space Logo" className="h-24" />
      </Link>
      <ul className="flex items-center space-x-6">
        <li><Link to="/about" className="text-pink-500 font-semibold hover:text-pink-300">ABOUT</Link></li>
        <li><Link to="/kactivities" className="text-white font-semibold hover:text-gray-300">K-ACTIVITIES</Link></li>
        <li><Link to="/kevents" className="text-white font-semibold hover:text-gray-300">K-EVENTS</Link></li>
        <li><Link to="/kworkshops" className="text-white font-semibold hover:text-gray-300">K-WORKSHOPS</Link></li>
        <li><Link to="/kemistryfestival" className="text-white font-semibold hover:text-gray-300">KEMISTRY FESTIVAL</Link></li>
        <li><Link to="/contact" className="text-white font-semibold bg-pink-500 hover:bg-pink-600 rounded-full px-4 py-2">CONTACT</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
