import "./App.css";
import { Navbar } from "./components/navbar";
import { LoginPage } from "./components/user/login";
import { ThemeProvider } from "./context/themeContext";
import useTheme from "./hooks/useTheme";

function App() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Navbar />
        <LoginPage />
      </ThemeProvider>{" "}
    </>
  );
}

export default App;
