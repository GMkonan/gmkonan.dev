import { Moon, Sun } from "@components/svgs"
import useHasMounted from "src/hooks/useHasMounted"
import { useTheme } from "src/store/Theme"
import styled from "styled-components"


const ThemeToggle = () => {

    const hasMounted = useHasMounted()
    const theme = useTheme(state => state.theme)
    const changeTheme = useTheme(state => state.ChangeTheme)

    return (
        <Label>
            <Button 
            onClick={(e) => changeTheme()}
            >
            {theme == 'light' ? (
                <Moon stroke="var(--primary)" width="22px" height="22px" />
            ) : (
                <Sun stroke="var(--primary)" width="22px" height="22px" />
            )}
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