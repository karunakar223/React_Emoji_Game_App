// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, resetGame, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreResult = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="result-details-section">
        <h1 className="heading">{gameStatus}</h1>
        <p className="present-score">{scoreResult}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" className="reset-btn" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="img" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
