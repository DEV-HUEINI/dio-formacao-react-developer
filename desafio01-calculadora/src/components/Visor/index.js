// src\components\Visor\index.js

import { VisorContainer, VisorInput } from './styles';

const Visor = ({value}) => {
  return (
    <VisorContainer>
      <VisorInput>
        <input disabled value={value}/>
      </VisorInput>
    </VisorContainer>
  );
}

export default Visor;
