import Highlight, { defaultProps, Language } from "prism-react-renderer"

const CodeSnippet: React.FC<any> = (props) =>(
  <Highlight
    {...defaultProps}
    code={props.children.props.children.trim()}
    language={props.children.props.className?.split('-')[1] || ''}
    theme={undefined}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={{ ...style }}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

// ways to style:
// https://www.peterlunch.com/blog/prism-react-render-nextjs

export default CodeSnippet