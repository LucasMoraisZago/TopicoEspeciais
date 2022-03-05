import React from "react";
import  ReactDOM  from "react-dom";
import  Componente1  from "./componentes/Componente1";
import  {CompA, CompB as B}  from "./componentes/DoisComponentes";
import  {Teste1,Teste2,Teste3}  from "./componentes/MultiElementos";



const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/> */}
        {/* <CompA valor="Primeiro componente"/>
        <B valor="Segundo componente"/> */}
        {/* <MultiElementos/> */}
        <Teste1/>
        <Teste2/>
        <Teste3/>
    </div>
    ,element
)