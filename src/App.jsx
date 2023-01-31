import { ThemeProvider } from "styled-components";
import Router from "./router";
import IsMobileProvider from "./context/IsMobile";
// themes
import { mainTheme } from "./theme";

// style
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <IsMobileProvider>
          <GlobalStyle />
          <Router />
        </IsMobileProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
