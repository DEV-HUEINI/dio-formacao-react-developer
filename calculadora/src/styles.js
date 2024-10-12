// src\styles.js

import styled from 'styled-components'; // Importa a biblioteca styled-components para criar componentes estilizados

export const ContainerGeneral = styled.div`
    width: 100%; /* Define a largura como 100% do contêiner pai */
    height: 100vh; /* Define a altura como 100% da altura da viewport */
    background-color: #0f062e; /* Define a cor de fundo como branco */
    display: flex; /* Define o layout como flexbox */
    align-items: center; /* Alinha os itens no centro verticalmente */
    justify-content: center; /* Alinha os itens no centro horizontalmente */
`;

export const ContainerCalculator = styled.div`
    min-width: 300px; /* Define a largura mínima como 300px */
    min-height: 520px; /* Define a altura mínima como 520px */
    width: 300px; /* Define a largura como 300px */
    height: 520px; /* Define a altura como 520px */
    background-color: #444; /* Define a cor de fundo como cinza escuro */
    border-radius: 15px; /* Define bordas arredondadas com raio de 8px */
    border: 4px solid #2f2f31; /* Borda de 2px sólida */
    display: flex; /* Define o layout como flexbox */
    align-items: center; /* Alinha os itens no centro verticalmente */
    justify-content: center; /* Alinha os itens no centro horizontalmente */
    flex-direction: column; /* Define a direção do layout flex como coluna */
    padding: 20px; /* Adiciona margens internas de 20px */
    margin: 8px; /* Adiciona margens externas de 8px */
    box-sizing: border-box; /* Inclui padding e border no tamanho total */
    overflow: hidden; /* Evita que o conteúdo saia do contêiner */
`;

