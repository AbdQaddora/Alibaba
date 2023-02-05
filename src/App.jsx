import { ThemeProvider } from "styled-components";
import Router from "./router";

// context
import IsMobileProvider from "./context/IsMobile";
import CartContextProvider from "./context/CartContext";

// themes
import { mainTheme } from "./theme";

// style
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <IsMobileProvider>
          <CartContextProvider>
            <GlobalStyle />
            <Router />
          </CartContextProvider>
        </IsMobileProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
