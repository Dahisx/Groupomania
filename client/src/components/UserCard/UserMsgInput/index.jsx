import StyledUserMsgInput from "./index.styled";
import React from 'react';
const UserMsgInput = React.forwardRef(({...props},ref) => {
    return(
        <StyledUserMsgInput {...props} ref={ref}/>
    )
});

export default UserMsgInput;