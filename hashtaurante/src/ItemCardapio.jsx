import React from 'react'

export function ItemCardapio(props) {
    return (
        <div className='container-item-cardapio'>
            <div>
                <div>
                    <h2>{props.nome}</h2>
                    <p>{props.preco}</p>
                </div>
                <img src={props.imagem} alt="Imagem de produto" className='imagemCardapio'/>
            </div>
                    <p>{props.descricao}</p>
        </div>
    )
}
