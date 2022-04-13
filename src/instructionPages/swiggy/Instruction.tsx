import CardFace from "App/FlashCard/cards/CardNormal/CardFace"
import { CardType } from "data/Card"

const Instruction = () => {
  return (
      <div className="card-container">
        <div className="flash-card-wrapper">
          <CardFace card={{
            type: CardType.Normal,
            id: 'demo'
          }} side="front" />
        </div>
    </div>
  )
}

export default Instruction
