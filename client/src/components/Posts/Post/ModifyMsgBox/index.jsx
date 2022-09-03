import ModifyMsgBoxStlyed from "./index.styled";
import React from 'react';

const ModifyMsgBox = React.forwardRef(({children,...props},ref) => (
    <ModifyMsgBoxStlyed {...props} ref={ref} >
        {children}
    </ModifyMsgBoxStlyed>
));

export default ModifyMsgBox;