import { Instruction } from "data/Instruction"
import { useEffect, useState } from "react"
import InstructionPage from "./InstructionPage"

interface Props {
  instructions: Instruction[]

  onComplete: () => void
}

const Instructions = (props: Props) => {
  const { instructions, onComplete } = props
  const [currentPage, setCurrentPage] = useState(0)

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    if (currentPage === instructions.length) {
      onComplete();
    }
  }, [currentPage, instructions.length, onComplete])

  return (
    <div className="instructions">
      {instructions.map(instruction => (
        <InstructionPage instruction={instruction} onNextPage={handleNextPage} />
      ))}
    </div>
  )
}

export default Instructions
