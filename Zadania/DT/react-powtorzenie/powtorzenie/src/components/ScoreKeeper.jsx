import { useState } from "react";

export default function ScoreKeeper({numPlayers = 3, target = 5})
{
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    
    const hasWinner = scores.some(score => score >= target)

    const incrementScore = (index) => {
        if(hasWinner) return
        setScores(prevScores => {
            const newScores = [...prevScores]
            if(newScores[index] < target)
            {
                newScores[index]++
            }
            return newScores
        })
    }

    const resetGame = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return(
        <>
            <ol>
                {scores.map((score, index) => {
                    const isWinner = score >= target;
                    return (
                        <li key={index} style={{ marginBottom: "8px" }}>
                            Player {index + 1}: {score} 
                            {isWinner && <span style={{ marginLeft: "10px", color: "green" }}>WINNER!</span>}
                            
                            <button 
                            onClick={() => incrementScore(index)} 
                            disabled={isWinner || hasWinner}
                            style={{ marginLeft: "10px" }}>
                            
                            +1

                            </button>
                        </li>
                    );
                })}
            </ol>

            {hasWinner && (
                <button onClick={resetGame} style={{ marginTop: "10px", padding: "5px 10px" }}>
                    Zresetuj grę
                </button>
            )}
        </>
    )
}