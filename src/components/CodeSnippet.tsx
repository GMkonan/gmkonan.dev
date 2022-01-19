import Highlight, { defaultProps } from "prism-react-renderer";

interface CodeSnippetProps {
    children: string
}

const CodeSnippet = ({children}: CodeSnippetProps) => {
    return(
        <Highlight {...defaultProps} code={children} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
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
    )
}

/* 
Usage in MDX:
    <CodeSnippet>
        Code here
    </CodeSnippet>

*/

export default CodeSnippet