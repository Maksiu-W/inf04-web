import { useState } from "react";

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState(["😃"])

    function addEmoji(){
        const newEmojis = [...emojis, "😃"]
        setEmojis(newEmojis)
    }

    return(
        <>
            <div style={{marginTop: "40px"}}>
                {emojis.map(e => (
                    <span style={{fontSize: "4rem"}}>{e}</span>
                ))}
                <button onClick={addEmoji}>Add emoji</button>
            </div>
        </>
    )
}