import React from "react";
import { ContainerEsquerta, ContainerPrincipal, ContainerDireta } from "./styled";
import Global  from "./styles/Global";


const App = () => {

  return (
    <ContainerPrincipal> 
      <ContainerDireta>
        Informações
      </ContainerDireta>
      <ContainerEsquerta>
        Resultado
      </ContainerEsquerta>
      <Global />
    </ContainerPrincipal>
  );
}

export default App;
