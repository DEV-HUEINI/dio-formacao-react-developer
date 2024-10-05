import { ContainerGeneral, ContainerCalculator } from './styles'; // Importa o ContainerTeclado do styles.js
import { useState } from 'react';

import Visor from './components/Visor';
import Teclado from './components/Teclado';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [expression, setExpression] = useState(''); // Armazena a expressão completa
  const [isOperationPressed, setIsOperationPressed] = useState(false);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setExpression(''); // Limpa a expressão
    setIsOperationPressed(false);
    setIsResultDisplayed(false);
  };

  const handleBackspace = () => {
    // Remover o último caractere do número atual
    setCurrentNumber(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1); // Remove o último caractere
      } else {
        return '0'; // Se só restar um caractere, volta a ser '0'
      }
    });

    // Remover o último caractere da expressão acumulada, se a expressão não estiver vazia
    setExpression(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1); // Remove o último caractere
      } else {
        return ''; // Se só restar um caractere, limpa a expressão
      }
    });
  };

  const handleAddNumber = (num) => {
    if (isResultDisplayed) {
      // Se o resultado foi exibido, limpa tudo e começa nova operação
      setCurrentNumber(num);
      setExpression(num); // Inicia a nova expressão com o número
      setIsResultDisplayed(false);
    } else if (isOperationPressed) {
      // Se uma operação foi pressionada, zera o visor e adiciona o novo número
      setCurrentNumber(num);
      setIsOperationPressed(false);
      setExpression(prev => `${prev}${num}`); // Continua acumulando a expressão
    } else {
      setCurrentNumber(prev => {
        if (prev === '0' && num !== '.') {
          return num;
        }
        if (prev.includes('.') && num === '.') {
          return prev;
        }
        return `${prev}${num}`;
      });
      setExpression(prev => `${prev}${num}`); // Continua acumulando a expressão
    }
  };

  const handleOperation = (op) => {
    if (!isOperationPressed) {
      setFirstNumber(currentNumber);
      setOperation(op);
      setIsOperationPressed(true);
      setExpression(prev => `${prev} ${op} `); // Adiciona a operação à expressão
    }
  };

  const handleSumNumbers = () => handleOperation('+');
  const handleSubNumbers = () => handleOperation('-');
  const handleDivNumbers = () => handleOperation('/');
  const handleMultNumbers = () => handleOperation('*');

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        default:
          return;
      }

      // Atualiza o visor para mostrar apenas o resultado
      setCurrentNumber(String(result));
      setExpression(`${expression} = ${result}`); // Exibe a operação completa
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true);
    }
  };

  return (
    <ContainerGeneral>
      <ContainerCalculator>
        
        {/* Exibe a expressão acumulada até o momento */}
        <Visor value={expression || currentNumber} />
        
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
