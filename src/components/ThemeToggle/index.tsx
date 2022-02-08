import { Moon, Sun } from "@components/svgs"
import useHasMounted from "src/hooks/useHasMounted"
import { useTheme } from 'next-themes'
import styled from "styled-components"


const ThemeToggle = () => {

    const hasMounted = useHasMounted()
    const { theme, setTheme } = useTheme()

    return (
        <Label>
            <Button 
            onClick={(e) => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
            {hasMounted ? theme == 'light' ? (
                <Moon stroke="var(--primary)" width="22px" height="22px" />
            ) : (
                <Sun stroke="var(--primary)" width="22px" height="22px" />
            ) : null}
            </Button>
        </Label>
    )
}

const Label = styled.label`
    border: none;
    cursor: pointer;
`

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

export default ThemeToggle