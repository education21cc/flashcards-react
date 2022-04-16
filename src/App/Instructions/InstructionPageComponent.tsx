import './styles/instructionPage.scss'
import { lazy, Suspense } from "react";
interface Props {
  componentPath: string
  onNextPage?: () => void
  onPreviousPage?: () => void
}

// Lazy loads a react component
const InstructionPageComponent = (props: Props) => {
  const { componentPath, ...otherProps } = props

  const PageComponent = lazy(() => import(`instructionPages/${componentPath}`));

  return (
    <>
    <Suspense fallback={'...Loading'}>
        <PageComponent { ...otherProps } />
      </Suspense>
    </>
  )
}

export default InstructionPageComponent
