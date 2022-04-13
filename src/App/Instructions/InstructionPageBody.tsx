import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { useTranslationStore } from "stores/translations";
import { reactMarkdownRemarkDirective } from "markdown/reactMarkdownDirective";
import "./styles/instructionPage.scss";

interface Props {
  body: string;
}

// Uses react-markdown to display a simple body
const InstructionPageBody = (props: Props) => {
  const { body } = props;
  const translations = useTranslationStore();

  return (
    <ReactMarkdown remarkPlugins={[directive, reactMarkdownRemarkDirective]}>
      {translations.getTextRaw(body)}
    </ReactMarkdown>
  );
};

export default InstructionPageBody;
