// src\components\Teclado\styles.js

import styled from 'styled-components';


export const TeclaButton = styled.button`
    width: 60x;  /* Largura fixa */
    height: 60px; /* Altura fixa */

    border: 1px solid #CDCDCD;
    background-color: #5f5b5b;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 8px; /* Define bordas arredondadas com raio de 8px */
    border: 2px solid #151516; /* Borda de 2px sólida */
    padding: 10px; /* Adiciona margens internas de 16px */
    
    
    &:hover {
        opacity: 0.4;
    }
    
    &.botaoVermelho {
        background-color: #9b2727bb; /* Altera a cor (opcional) */ 
    }
    
    /* Estilo específico para o botão de "igual" */
    &.igual {
        grid-row: span 2; /* Faz o botão ocupar 2 linhas no grid */
        height: 130px; /* Ajusta a altura do botão "igual" */
        background-color: #4238cc86; /* Altera a cor (opcional) */
    }
    
    &.zero {
        grid-column: span 2; /* Faz o botão ocupar 2 colunas */
        width: 110px; /* Ajusta a largura do botão "zero" */
    }
    
`

// Novo estilo para organizar as teclas
export const TeclaContainer = styled.div`
    display: grid; /* Define o layout como grid */
    grid-template-columns: repeat(4, 1fr); /* Divide em 4 colunas de tamanhos iguais */
    grid-template-rows: repeat(5, 1fr); /* Divide em 5 linhas de tamanhos iguais */
    gap: 5px; /* Define um espaçamento entre as teclas */
    
    
    padding: 10px; /* Adiciona padding ao redor do grid */
    box-sizing: border-box; /* Inclui padding no cálculo de tamanho */
    border: 4px solid #2f2f31; /* Borda de 2px sólida */
    border-radius: 8px; /* Define bordas arredondadas com raio de 8px */
`;






