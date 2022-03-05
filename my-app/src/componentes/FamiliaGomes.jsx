import React from "react";
import Nome from "./Nome";

export default props =>
<div>
    <Nome nome="Lucas" sobrenome={props.sobrenome}/>
    <Nome nome="Antonio" sobrenome={props.sobrenome}/>
    <Nome nome="Joaquim" sobrenome={props.sobrenome}/>
    <Nome nome="José" sobrenome={props.sobrenome}/>
</div>