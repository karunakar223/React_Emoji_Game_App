// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickBtn = () => {
    clickEmoji(id)
  }

  return (
    <li className="li-item">
      <button type="button" className="btn" onClick={onClickBtn}>
        <img src={emojiUrl} alt={emojiName} className="icon" />
      </button>
    </li>
  )
}

export default EmojiCard
