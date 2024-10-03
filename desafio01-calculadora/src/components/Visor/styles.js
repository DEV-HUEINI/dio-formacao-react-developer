// src\components\Visor\styles.js

import styled from 'styled-components';

export const VisorInput = styled.div`
    
    display: flex; /* Define o layout flexível */
    align-items: center; /* Alinha os itens ao centro verticalmente */
    width: 100%; /* Largura total */

    input {
        width: 100%; /* Largura total */
        height: 50px; /* Altura do input */
        background-color: #141416; /* Cor de fundo do input */
        text-align: right; /* Alinha o texto à direita */
        font-size: 24px; /* Tamanho da fonte */
        font-family: 'Roboto'; /* Fonte do texto */
        color: #FFFFFF; /* Cor do texto */
        padding-right: 10px; /* Espaço à direita */

        margin-top: 10px; /* Margem à esquerda */
        margin-left: 5px; /* Margem à esquerda */
        margin-right: 5px; /* Margem à esquerda */
        margin-bottom: 10px; /* Margem à esquerda */
        border: 2px solid #2f2f31; /* Borda de 2px sólida */
        border-radius: 8px; /* Define bordas arredondadas com raio de 8px */
    }
`;


export const VisorContainer = styled.div`
    background-color: #0a0a0a; /* Define a cor de fundo como azul claro */
    border: 4px solid #2f2f31; /* Borda de 2px sólida */
    display: flex; /* Define o layout como flexbox */
    align-items: center; /* Alinha os itens no centro verticalmente */
    
    
    color: white; /* Define a cor do texto como branco */
    font-size: 24px; /* Define o tamanho da fonte como 24px */
    border-radius: 8px; /* Define bordas arredondadas com raio de 8px */

    margin-bottom: 10px; 
    padding: 10px; /* Adiciona margens internas de 16px */  
    box-sizing: border-box; /* Inclui padding e border no tamanho total */
`;

