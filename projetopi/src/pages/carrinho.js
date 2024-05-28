import React from 'react';
import styled from "styled-components";
import Cabecalho from '../components/cabecalho';
import PizzaSalg from "../images/pizzasalg.jpg"

const Carrinho_styled = styled.div`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: red;

    .container{
        display: flex;
        flex-direction: column;
    }

    .box1 {
        margin-left: 20px;
    }

    .scroll{
        display: flex;
        flex-direction: row;
        overflow: auto;
        scrollbar-color: white red;
        scrollbar-width: thin;
        margin: 0px 20px;
    }

    .scroll img{
        margin-right: 20px;
    }

    .box3{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin-left: 20px;
        margin-top: 50px;
        text-align: start;

    }

    .box-column{
        display: flex;
        flex-direction: column;
        margin-right: 140px;
    }

    h2{
        margin: 0;
    }
    h1{
        margin: 0;
    }
`;

export default function Carrinho(){
    return(
        <Carrinho_styled>
            <Cabecalho/>
            <div className='container'>
               <div className='box1'>
                    <h1> Carrinho de Fulano </h1>
               </div>
               <div className='box2'>
                    <div className='scroll'>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>
                        <img src={PizzaSalg} alt="" width="259px" height="136px"/>      
                    </div>
               </div>
               <dov className='box3'>
                    <div className='box-column'>
                        <h2> Calcular frete: </h2>
                        <label for="fname">Endereço:</label>
                        <input type="text" id="fname" name="fname"/>
                        <h2> Promoção aplicada: </h2>
                        <h2> Valor total: </h2>
                    </div>
                    <div className='box-column'>
                        <h1> Como deseja pagar? </h1>
                        <h2> Pix </h2>
                        <h2> Cartão </h2>
                        <h2> Pagar na entrega </h2>
                    </div>
               </dov>
            </div>
        </Carrinho_styled>
    )
}