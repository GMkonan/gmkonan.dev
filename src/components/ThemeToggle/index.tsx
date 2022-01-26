import { useTheme } from "src/store/Theme"
import styled from "styled-components"


const ThemeToggle = () => {

    const theme = useTheme(state => state.theme)
    const changeTheme = useTheme(state => state.ChangeTheme)

    return (
        <Label>
            <button 
            onClick={(e) => changeTheme()}>
            {theme == 'light' ? 'dark' : 'light'}
            </button>
        </Label>
    )
}

const Label = styled.label`
font-size: 1.2rem;

`

export default ThemeToggle