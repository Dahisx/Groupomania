import React from "react";
import StyledInput from "./index.styled";

const InputNone = React.forwardRef(({color="primary",...props},ref) => {
    return(
        <StyledInput {...props} color={color} ref={ref}/>
    )
});

export default InputNone;