import React from 'react';
import styled from "styled-components";
import Pizza from "../images/pizzasalg.jpg"
import {Link} from 'react-router-dom';


const Box_styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    padding: 50px 0px;
    margin: 10px;
    border-radius: 10px;

    .botao{
        margin-top: 6px;
        display:flex;
        flex-direction: row;
    }

    button{
        border: none;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        margin: 5px;
        background-color: darkgreen;
        color: white;
        cursor: pointer;
    }

    .column{
        display: flex;
        flex-direction: column;
    }

`;

export default function Box(){
    return(
        <Box_styled>
                <img src={Pizza} alt="" width="250px" height="auto" />
                <div className='botao'>
                    <h5> pizza de queijo com salsicha <br/> borda recheada com cheddar<br/> e calabresa.</h5>
                    <div className='column'> 
                        <Link to={'/carrinho'}><button> P </button></Link>
                        <Link to={'/carrinho'}><button> M </button></Link>
                        <Link to={'/carrinho'}><button> G </button></Link>
                    </div>
                </div>
        </Box_styled>
    )
}