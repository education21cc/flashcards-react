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
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    if (currentPage === instructions.length) {
      onComplete();
    }
  }, [currentPage, instructions.length, onComplete])

  return (
    <div className="instructions">
      {instructions.map((instruction, i) => (
        <InstructionPage
          key={`${instruction.body}${instruction.componentPath}`}
          active={i === currentPage}
          hasPrevious={i > 0}
          instruction={instruction}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      ))}
    </div>
  )
}

export default Instructions
