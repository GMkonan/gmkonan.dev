import useHasMounted from "src/hooks/useHasMounted"
import { useTheme } from "src/store/Theme"
import styled from "styled-components"


const ThemeToggle = () => {

    const theme = useTheme(state => state.theme)
    const changeTheme = useTheme(state => state.ChangeTheme)
    const hasMounted = useHasMounted()

    return (
        <Label>
            <Button 
            onClick={(e) => changeTheme()}>
            {hasMounted && theme == 'light' ? (
                <svg width="22px" height="22px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="m1.75 8c0 3.45 2.8 6.25 6.25 6.25 3.41-.0027 6.25-3 6.25-6-1 .5-4 1.5-6-.5s-1-5-.5-6c-3 0-6 2.84-6 6.25z"/>
                </svg>
            ) : (
                <svg width="22px" height="22px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <circle cy="8" cx="8" r="3.25"/>
                <path d="m2.75 13.25.5-.5m9.5 0 .5.5m-.5-10 .5-.5m-10 .5-.5-.5m-.50 5.25h-1m13.5 0h-1m-5.75 5.75v1m0-13.5v1"/>
                </svg>
            )}
            </Button>
        </Label>
    )
}

const Label = styled.label`
`

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

export default ThemeToggle