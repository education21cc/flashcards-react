import './styles/instructionPage.scss'
import { lazy, Suspense } from "react";
interface Props {
  componentPath: string
}

// Lazy loads a react component
const InstructionPageComponent = (props: Props) => {
  const { componentPath } = props

  const OtherComponent = lazy(() => import(`instructionPages/${componentPath}`));

  return (
    <>
    <Suspense fallback={'...Loading'}>
        <OtherComponent />
      </Suspense>
    </>
  )
}

export default InstructionPageComponent
