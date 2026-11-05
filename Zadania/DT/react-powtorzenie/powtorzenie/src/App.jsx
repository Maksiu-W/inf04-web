import Counter from './components/Counter'
import './App.css'
import EmojiClicker from './components/EmojiClicker'
import ScoreKeeper from './components/ScoreKeeper'

function App() {

  return (
    <>
      <Counter></Counter>
      <EmojiClicker></EmojiClicker>
      <ScoreKeeper numPlayers={5} target={5}></ScoreKeeper>
    </>
  )
}

export default App
