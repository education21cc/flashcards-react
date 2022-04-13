import { Instruction } from "data/Instruction"
import { ReactComponent as NextIcon } from './../../images/icons/next-24px.svg';
import InstructionPageBody from "./InstructionPageBody";
import InstructionPageComponent from "./InstructionPageComponent";
import './styles/instructionPage.scss'

interface Props {
  instruction: Instruction
  active: boolean
  hasPrevious: boolean
  onNextPage: () => void
  onPreviousPage: () => void
}

const InstructionPage = (props: Props) => {
  const { instruction, hasPrevious, active, onNextPage, onPreviousPage } = props

  return (
    <div className={`instruction-page ${active ? "active" : ""}`}>
      {instruction.body && <InstructionPageBody body={instruction.body} />}
      {instruction.componentPath && <InstructionPageComponent componentPath={instruction.componentPath} />}
        {hasPrevious && (
        <button onClick={onPreviousPage} className="button-circle button-prev" >
          <NextIcon />
        </button>
        )}
      <button onClick={onNextPage} className="button-circle button-next" >
        <NextIcon />
      </button>
    </div>
  )
}

export default InstructionPage
