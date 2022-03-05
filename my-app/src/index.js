import React from "react";
import  ReactDOM  from "react-dom";
// import  Componente1  from "./componentes/Componente1";
// import  {CompA, CompB as B}  from "./componentes/DoisComponentes";
// import  {Teste1,Teste2,Teste3}  from "./componentes/MultiElementos";
// import  FamiliaGomes  from "./componentes/FamiliaGomes";
// import  Familia  from "./componentes/Familia";
// import  Nome  from "./componentes/Nome";
import ComponenteComFuncao from "./componentes/ComponenteComFuncao";






const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/> */}
        {/* <CompA valor="Primeiro componente"/>
        <B valor="Segundo componente"/> */}
        {/* <MultiElementos/> */}
        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}
        {/* <FamiliaGomes/> */}
        {/* <Familia>
            <Nome nome="Lucas" sobrenome=" Zago"/>
            <Nome nome="Antonio" sobrenome=" Zago"/>
            <Nome nome="Joaquim" sobrenome=" Zago"/>
            <Nome nome="José" sobrenome=" Zago"/>
        </Familia> */}
        {/* <Familia sobrenome=" Zago" endereco=" Rua teste" numero=" nº1111" cidade="Franca" estado=" SP">
            <Nome nome="Luis" />
            <Nome nome="Joaquim" sobrenome=" Zago"/>
            <Nome nome="José" sobrenome=" Zago"/>
        </Familia> */}
        {/* <FamiliaGomes sobrenome=" Zago"/> */}
        <ComponenteComFuncao/>
    </div>
    ,element
)