import React from 'react';
import styled from "styled-components";
import Cabecalho from '../components/cabecalho';
import Secao_styled from '../components/secao';
import CardapioSecao_styled from '../components/cardapio';
import PizzaSalg from "../images/pizzasalg.jpg"
import PizzaSalg2 from "../images/pizza2.jpeg"
import PizzaSalg3 from "../images/pizza3.jpeg"
import PizzaSalg4 from "../images/pizza44.jpeg"
import PizzaSalg5 from "../images/pizza5.jpeg"
import PizzaSalg6 from "../images/pizza6.jpeg"
import PizzaDoce from "../images/pizza7.jpeg"
import PizzaDoce2 from "../images/pizza8.jpeg"
import PizzaDoce3 from "../images/pizza9.jpeg"
import PizzaDoce4 from "../images/pizza10.jpeg"
import PizzaDoce5 from "../images/pizza11.jpeg"
import PizzaDoce6 from "../images/pizza12.jpeg"
import Bebida from "../images/bebida.jpeg"
import Bebida2 from "../images/bebida2.jpeg"
import Bebida3 from "../images/bebida3.jpeg"

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

            <div className='container'>
                <CardapioSecao_styled>
                    <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                    <img src={PizzaSalg2} alt="" width="259px" height="136px"/>
                    <img src={PizzaSalg3} alt="" width="259px" height="136px"/>
                    <img src={PizzaSalg4} alt="" width="259px" height="136px"/>
                    <img src={PizzaSalg5} alt="" width="259px" height="136px"/>
                    <img src={PizzaSalg6} alt="" width="259px" height="136px"/>
                </CardapioSecao_styled>
                <CardapioSecao_styled>
                    <img src={PizzaDoce} alt="" width="259px" height="136px"/>
                    <img src={PizzaDoce2} alt="" width="259px" height="136px"/>
                    <img src={PizzaDoce3} alt="" width="259px" height="136px"/>
                    <img src={PizzaDoce4} alt="" width="259px" height="136px"/>
                    <img src={PizzaDoce5} alt="" width="259px" height="136px"/>
                    <img src={PizzaDoce6} alt="" width="259px" height="136px"/>
                </CardapioSecao_styled>
                <CardapioSecao_styled>
                    <img src={Bebida} alt="" width="259px" height="136px"/>
                    <img src={Bebida2} alt="" width="259px" height="136px"/>
                    <img src={Bebida3} alt="" width="259px" height="136px"/>
                </CardapioSecao_styled>
            </div>
        </Cardapio_styled>
    )
}