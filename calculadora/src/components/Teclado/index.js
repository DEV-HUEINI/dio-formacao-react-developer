// src\components\Teclado\index.js

import { TeclaButton, TeclaContainer } from './styles';

const Teclado = ({ 

  handleAddNumber, 
  handleOnClear, 
  handleBackspace, 
  handleSumNumbers, 
  handleSubNumbers, 
  handleDivNumbers, 
  handleMultNumbers, 
  handleEquals 
  
}) => {
  
  return (
    <TeclaContainer>
      <TeclaButton className="botaoVermelho" onClick={handleOnClear}>C</TeclaButton>
      <TeclaButton className="botaoVermelho" onClick={handleBackspace}>←</TeclaButton>
      <TeclaButton onClick={handleDivNumbers}>/</TeclaButton>
      <TeclaButton onClick={handleMultNumbers}>*</TeclaButton>

      <TeclaButton onClick={() => handleAddNumber('7')}>7</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('8')}>8</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('9')}>9</TeclaButton>
      <TeclaButton onClick={handleSubNumbers}>-</TeclaButton>

      <TeclaButton onClick={() => handleAddNumber('4')}>4</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('5')}>5</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('6')}>6</TeclaButton>
      <TeclaButton onClick={handleSumNumbers}>+</TeclaButton>

      <TeclaButton onClick={() => handleAddNumber('1')}>1</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('2')}>2</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('3')}>3</TeclaButton>
      <TeclaButton className="igual" onClick={handleEquals}>=</TeclaButton> {/* Classe equal adicionada */}

      <TeclaButton className="zero" onClick={() => handleAddNumber('0')}>0</TeclaButton>
      <TeclaButton onClick={() => handleAddNumber('.')}>.</TeclaButton>
      
    </TeclaContainer>
  );
};

export default Teclado;