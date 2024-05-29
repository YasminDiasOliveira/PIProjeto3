import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './pages/menu';
import Cardapio from './pages/cardapio'
import Carrinho from './pages/carrinho';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Escolha from './pages/escolha';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/cardapio' element={<Cardapio/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/escolha' element={<Escolha/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
