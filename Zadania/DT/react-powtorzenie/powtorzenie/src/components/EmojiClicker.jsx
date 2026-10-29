import { useState } from "react";

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{emoji: randomEmoji(), id: Date.now()}])

    function randomEmoji(){
        const choices = ["😄", "🫩", "😉", "🥰", "😀", "😊", "😴", "😛"]

        return choices[Math.floor(Math.random() * choices.length)]
    }

    function addEmoji(){
        const newEmojis = [...emojis, {emoji: randomEmoji(), id: Date.now()}]
        setEmojis(newEmojis)

        //setEmojis(oldEmojis => [...oldEmojis, "😃"])
    }

    function deleteEmoji(id){
        const newEmojis = emojis.filter(e => e.id != id)
        setEmojis(newEmojis)
    }

    return(
        <>
            <div style={{marginTop: "40px"}}>
                {emojis.map((e, k) => (
                    <span key={k} style={{fontSize: "4rem"}} onClick={() => deleteEmoji(e.id)}>{e.emoji}</span>
                ))}
                <button onClick={addEmoji}>Add emoji</button>
            </div>
        </>
    )
}