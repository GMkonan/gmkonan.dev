import tw, { css } from 'twin.macro';

const Card = () => {
    
    return(
        <div 
        tw="flex bg-main-color shadow-xl rounded-xl text-brand-color z-10" 
        css={[`width: 425px; height: 380px;`]}>
            <div tw="mt-4 ml-4 leading-8">
                <pre> 
                    1&nbsp;Class <strong>Developer</strong> {"{"} 
                </pre>
                <pre>
                    2&nbsp;&nbsp;&nbsp;constructor() {"{"}
                </pre>
                <pre>
                    3&nbsp;&nbsp;&nbsp;&nbsp;this.name = <q><strong>Guilherme Monteiro Pereira</strong></q>
                </pre>
                <pre>
                    4&nbsp;&nbsp;&nbsp;&nbsp;this.nickname = <q><strong>Konan</strong></q>
                </pre>
                <pre>
                    5&nbsp;&nbsp;&nbsp;&nbsp;this.qualities = [<q><strong>Self-Learning</strong></q>, <q><strong>Curious</strong></q>]
                </pre>
                <pre>
                    6&nbsp;&nbsp;&nbsp;&nbsp;this.qualities = [<q><strong>Self-Learning</strong></q>, <q><strong>Curious</strong></q>]
                </pre>
                <pre>
                    7&nbsp;&nbsp; {"}"}
                </pre>
                <pre>
                    8&nbsp; {"}"}
                </pre>
            </div>
        </div>
    )
}

export default Card;