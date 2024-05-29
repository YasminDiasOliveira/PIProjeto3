import React from 'react';
import styled from "styled-components";
import PizzaSalg from "../images/pizza2.jpeg"
import Cabecalho from '../components/cabecalho';
import {Link} from 'react-router-dom';

const Menu_styled = styled.div`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 100px 0;
    }

    h4{
        color: red;
    }

    button{
        border: none;
        border-radius: 10px;
        background-color: red;
        color: white;
        height: 40px;
        width: 200px;
        cursor: pointer;
    }


`;

export default function Menu(){
    return(
        <Menu_styled>
            <Cabecalho/>
            <div className='container'>
                <img src={PizzaSalg} alt="" width="400px" height="auto"/>
                <h4> Pizza sabor calabresa com queijo e borda recheada</h4>
                <Link to={'/carrinho'}> <button> Adicionar ao carrinho </button> </Link>
            </div>
        </Menu_styled>
    )
}