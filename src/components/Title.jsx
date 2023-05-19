import React from "react";

export const Title = React.memo(({tag, text, typeOfStyles}) => {

    let Tag = tag || "h2"

    return (
        <Tag className={typeOfStyles.MainTitle}>
            {text}
        </Tag>
    )
})