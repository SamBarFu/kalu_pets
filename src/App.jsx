import { React } from "react"
import GlobalStyle from "@styles/GlobalStyled"
import Theme from "@styles/theme"
import { ThemeProvider } from "styled-components"
import RoutesNav from "./routes"

function App() {
  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RoutesNav />
      </ThemeProvider>
    </main>
  )
}

export default App
