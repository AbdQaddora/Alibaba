import { ThemeProvider } from "styled-components";
import Router from "./router";
// themes
import { mainTheme } from "./theme";

// style
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
