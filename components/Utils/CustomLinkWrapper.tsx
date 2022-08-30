import React from "react";

const CustomLinkWrapper = React.forwardRef((props: any, ref) => (
    <a ref={ref} {...props}>
        {props.children}
    </a>
));

export default CustomLinkWrapper;