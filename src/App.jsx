
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import  Rutas  from './routes/Rutas';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Rutas></Rutas>
    </BrowserRouter>
  );
}

export default App;
