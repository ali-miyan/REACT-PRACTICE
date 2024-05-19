import React from "react";

export const RenderProps = ({children}:any) => {
    const data = 'heloooooooooo'

    return <>{children(data)}</>
}