import { useState } from "react";

type TitleProps = {
    title?: string
    username?: string
}

export default function Title(props: TitleProps) {

    const { title = "Default title", username } = props
    return(
        <>
            <h2>{title}</h2>
            <p>{username}</p>
        </>
    )
}