import { Instruction } from "data/Instruction"
import { useTranslationStore } from "stores/translations"
import { ReactComponent as NextIcon } from './../../images/icons/next-24px.svg';
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
  const translations = useTranslationStore();

  return (
    <div className={`instruction-page ${active ? "active" : ""}`}>
      {translations.getText(instruction.body)}
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
