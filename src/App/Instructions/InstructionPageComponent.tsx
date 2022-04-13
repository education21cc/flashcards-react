import ReactMarkdown from "react-markdown";
import directive from 'remark-directive';
import { Instruction } from "data/Instruction"
import { useTranslationStore } from "stores/translations"
import { ReactComponent as NextIcon } from './../../images/icons/next-24px.svg';
import { reactMarkdownRemarkDirective } from "markdown/reactMarkdownDirective";
import './styles/instructionPage.scss'
import { lazy, Suspense, useMemo } from "react";

interface Props {
  componentPath: string
}

// Lazy loads a react component
const InstructionPageComponent = (props: Props) => {
  const { componentPath } = props
  const translations = useTranslationStore();

  const OtherComponent = lazy(() => import('instructionPages/swiggy/Instruction'));
  // const { isLoading, result: Components } = useLazy(
  //   // Preserves identity of "imports" so it can be safely add as a dependency of useEffect
  //   // inside useLazy
  //   // useMemo(() => [() => import('instructionPages/swiggy/Instruction')], []),
  //   useMemo(() => [() => import(componentPath)], [componentPath]),
  //   true,
  // );

  // const TextComponent = result;

  return (
    <>
    <Suspense fallback={'...Loading'}>
        <OtherComponent />
      </Suspense>
    </>
  )
}

export default InstructionPageComponent
