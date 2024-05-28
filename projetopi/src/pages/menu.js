import React from 'react';
import styled from "styled-components";
import Pizza from "../images/pizza.jpg"
import Cabecalho from '../components/cabecalho';
import Box from '../components/box';
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
        align-items: center
        margin: 0;
    }

    .section1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .section2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: darkred;
        padding: 20px 0px 20px 0px;
    }

    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .bottom button { 
        border: none;
        height: 30px;
        width: 500px;
        margin: 5px;
        background-color: darkgreen;
        color: white;
        border-radius: 20px;
    }

`;

export default function Menu(){
    return(
        <Menu_styled>
            <Cabecalho/>
            <div className='container'>
                <div className='section1'>
                    <img src={Pizza} alt="" width="900px" height="500px" margin-top="20px"/>
                </div>
                <div className='section2'>
                    <h1> Veja nossas promoções </h1>
                    <div className='row'>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                    </div>
                    <div className='bottom'>
                        <Link to={'/cardapio'}> <button> Veja nosso cardápio completo </button> </Link>
                    </div>
                </div>
            </div>
        </Menu_styled>
    )
}