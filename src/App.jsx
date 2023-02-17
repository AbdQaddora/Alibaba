import { ThemeProvider } from "styled-components";
import Router from "./router";

// context
import IsMobileProvider from "./context/IsMobile";
import CartContextProvider from "./context/CartContext";
import AuthContextProvider from "./context/authContext";

// themes
import { mainTheme } from "./theme";

// style
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <IsMobileProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <GlobalStyle />
              <Router />
            </CartContextProvider>
          </AuthContextProvider>
        </IsMobileProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
