import React from 'react';
import PizzaLogo from "../images/pizza.png";
import Carrinho from "../images/carrinho.png";
import {Link} from 'react-router-dom';

import styled from "styled-components";

const Cabecalho_styled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    padding: 0 30px;

    .logo{
        display: flex;
        flex-direction: row; 
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        font-style: normal;
        color: white;    
        font-size: 35px;  
        align-items: center;
    }

    .secoes{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a{
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 500;
        font-style: normal;
        color: white;
        margin: 0px 10px 0px 0px;
        text-decoration: underline;
        cursor: pointer;
    }

`;

export default function Cabecalho(){
    return(
        <Cabecalho_styled>
            <div className='logo'>
                <div> PBS </div>
                <img src={PizzaLogo} alt="" width="auto" height="35px"/>
            </div>

            <div className='secoes'>
                <Link to={'/menu'}><a>Menu</a></Link>
                <Link to={'/cardapio'}><a>Cardápio</a></Link>
            </div>

            <div className='carrinho'>
                <Link to={'/carrinho'}><img src={Carrinho} alt=""width="auto" height="35px"/></Link>
            </div>
        </Cabecalho_styled>
    )
}