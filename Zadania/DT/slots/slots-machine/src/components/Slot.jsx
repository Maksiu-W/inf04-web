function Slot(){
    const emojis = ['🍒', '🍋', '🍇', '🍉', '7️⃣', '💎'];

    const reel1 = emojis[Math.floor(Math.random() * emojis.length)];
    const reel2 = emojis[Math.floor(Math.random() * emojis.length)];
    const reel3 = emojis[Math.floor(Math.random() * emojis.length)];

  const isWin = reel1 === reel2 && reel2 === reel3;

    return(
        <>
            <h1>🎰 Slots 🎰</h1>

            <h1>
                {reel1}
                {reel2}
                {reel3}
            </h1>

            {isWin? (
                <div>
                <h2>You win!</h2>
                <p>Congratulations.</p>
                </div>
            ) : (
                <h2>You lose!</h2>
            )}
        </>
    )
}

export default Slot