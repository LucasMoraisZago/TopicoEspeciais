import React from "react";
import { FilhosComProps } from "./ComponenteUtil";

export default props =>
<div>
    <h1>Familía</h1>
    {/* {props.children} */}
    {/* {React.cloneElement(props.children,{...props})} */}
    {/* {React.Children.map(props.children,filho=>{
        return React.cloneElement(filho,{...props})
    })} */}
    {FilhosComProps(props)}
</div>