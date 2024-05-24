import React from 'react';
import styled from "styled-components";
import Cabecalho from '../components/cabecalho';
import Secao_styled from '../components/secao';
import CarrosselPizzaSalg from '../components/carousel';
import { Carousel } from 'react-responsive-carousel'


const Cardapio_styled = styled.div`
    display: flex;
    flex-direction: column;

    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 30px;
    }

`;

export default function Cardapio(){
    return(
        <Cardapio_styled>
            <Cabecalho/>
            <div className='container'>
                <Secao_styled>
                    Pizzas Salgadas
                </Secao_styled>
                <Secao_styled>
                    Pizzas Doces
                </Secao_styled>
                <Secao_styled>
                    Bebidas
                </Secao_styled>
            </div>
            <CarrosselPizzaSalg/>

        </Cardapio_styled>
    )
}