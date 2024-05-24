import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './pages/menu';
import Cardapio from './pages/cardapio'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/cardapio' element={<Cardapio/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
