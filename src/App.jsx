
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import  Rutas  from './routes/Rutas';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Rutas></Rutas>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
