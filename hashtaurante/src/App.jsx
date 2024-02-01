import imagemRestaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './components/Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';
import { useState } from 'react';

export function App() {
  const paginasMenu = [pratosPrincipais,sobremesas,bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);



  return (
    <div>
      <img src={imagemRestaurante} alt="Imagem restaurante" className='capa' />
      <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
      <div className='menu'>
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio key={item.id} nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem} />)}
      </div>
    </div>
  )
}
