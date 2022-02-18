import Highlight, { defaultProps, Language, Prism } from "prism-react-renderer"
import theme from './theme'
import styled from "styled-components"
import { QUERIES } from "@constants";

//Add support for custom, not out of the box supported, languages

//@ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-java");

const CodeSnippet: React.FC<any> = (props) => {
  const language = props.children.props.className?.replace("language-", "").trim()
  return (
  <Highlight
    {...defaultProps}
    //Prism={Prism}
    code={props.children.props.children.trim() || ''}
    language={language}
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Container>
        {language && (
          <LanguageHeader>{language.toUpperCase()}</LanguageHeader>
        )}
      <Pre className={className} style={{ ...style }}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
      </Container>
    )}
  </Highlight>
);
            }
// ways to style:
// https://www.peterlunch.com/blog/prism-react-render-nextjs

const Pre = styled.pre`
  font-size: 18px;
  outline-offset: 2px;
  overflow-x: auto;
  //min-height: 50px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-width: (100% + 64px);
  @media ${QUERIES.phone} {
  font-size: 14px !important;
}
`;

const LanguageHeader = styled.div`
  background: var(--off-white);
  color: var(--gray);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-width: 1px 1px 0px;
  border-style: solid;
  padding: 0.4rem;
  border-color: rgba(230, 230, 230, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: right;
`

const Container = styled.div`
  background: var(--off-white);
  position: relative;
  margin-top: 48px;
  margin-bottom: 60px;
  transition: all 200ms ease-in 0s;

@media ${QUERIES.phone} {
  width: 350px;
}
`

export default CodeSnippet