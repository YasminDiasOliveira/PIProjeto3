import React from 'react';
import styled from "styled-components";
import PizzaLogo from "../images/pizza.png";
import { Link } from 'react-router-dom';


const Login_styled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    height: 100%
    width: 100%;
    justify-content: space-around;
    padding: 170px 0px;

    .box1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    .marca{
        font-size: 30px;
        color: white;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    .box2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    label{
        font-size: 20px;
        color: white;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    input{
        border-radius: 10px;
        width: 300px;
        border: none;
        margin-bottom: 10px;
    }

    h4{
        font-size: 15px;
        color: white;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 500;
        font-style: normal;
        color: white;
    }

    a{
        font-size: 15px;
        color: white;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 500;
        font-style: normal;
        color: white;
        cursor: pointer;
    }

    button{
        border-radius: 10px;
        border: none;
        backgroun-color: white;
        color: red;
        width: 150px;
        height: 22px;
        cursor: pointer;
    }

`;

export default function Login(){
    return(
        <Login_styled>
            <div className='box1'>
                <div className='logo'>
                    <img src={PizzaLogo} alt="" width="auto" height="90px"/>
                </div>
                <div className='marca'>
                    Pizzaria Bandeira dos Sabores  
                </div>  
            </div>
            <div className='box2'>
                <label for="fname">Email:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">Senha:</label>
                <input type="text" id="fname" name="fname"/>
                <Link to={'/menu'}><button> Entrar </button></Link>
                <h4> Não possui conta? <Link to={'/cadastro'}><a> Cadastre-se </a></Link> </h4>
            </div>
        </Login_styled>
    )
}