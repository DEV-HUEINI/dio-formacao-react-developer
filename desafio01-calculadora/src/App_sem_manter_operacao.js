import { ContainerGeneral, ContainerCalculator } from './styles'; // Importa o ContainerTeclado do styles.js
import { useState } from 'react';

import Visor from './components/Visor';
import Teclado from './components/Teclado';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [isOperationPressed, setIsOperationPressed] = useState(false); // Estado para saber se uma operação foi pressionada
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); // Novo estado para saber se o resultado foi exibido

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setIsOperationPressed(false);
    setIsResultDisplayed(false); // Reseta o estado do resultado exibido
  };
  
  const handleBackspace = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  };

  const handleAddNumber = (num) => {
    // Se o resultado foi exibido, limpe o visor antes de adicionar o novo número
    if (isResultDisplayed) {
      setCurrentNumber(num); // Começa com o novo número digitado
      setIsResultDisplayed(false); // Reseta o estado para que possa continuar a entrada
    } else if (isOperationPressed) {
      // Se uma operação foi pressionada, zera o visor e adiciona o novo número
      setCurrentNumber(num);
      setIsOperationPressed(false);
    } else {
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
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('+');  // Mostra o operador no visor
      setOperation('+');
      setIsOperationPressed(true); // Sinaliza que a operação foi pressionada
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true); // Sinaliza que o resultado foi exibido
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('-');
      setOperation('-');
      setIsOperationPressed(true);
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true);
    }
  };
  
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('/');
      setOperation('/');
      setIsOperationPressed(true);
    } else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true);
    }
  };
  
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('*');
      setOperation('*');
      setIsOperationPressed(true);
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true);
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
      
        {/* Mostra o número ou o operador no visor */}
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
