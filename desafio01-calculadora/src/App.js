// src\App.js

import { ContainerGeneral, ContainerCalculator } from './styles'; // Importa o ContainerTeclado do styles.js
import { useState } from 'react';

import Visor from './components/Visor';
import Teclado from './components/Teclado';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  
  const handleBackspace = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      // Verifica se o número atual é '0' e o número adicionado é diferente de '.'
      if (prev === '0' && num !== '.') {
        return num; // Se for, apenas substitui por num
      }
  
      // Se o número atual já tiver um ponto, não permite adicionar outro
      if (prev.includes('.') && num === '.') {
        return prev; // Retorna o número atual sem alterações
      }
  
      return `${prev}${num}`; // Caso padrão: concatena o número
    });
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  };
  
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    } else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setOperation('');
    }
  };
  
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <ContainerGeneral>
      <ContainerCalculator>
        <Visor value={currentNumber} />
        <Teclado
          handleAddNumber={handleAddNumber}
          handleOnClear={handleOnClear}
          handleBackspace={handleBackspace}
          handleSumNumbers={handleSumNumbers}
          handleSubNumbers={handleSubNumbers}
          handleDivNumbers={handleDivNumbers}
          handleMultNumbers={handleMultNumbers}
          handleEquals={handleEquals}
        />
      </ContainerCalculator>
    </ContainerGeneral>
  );
};

export default App;
