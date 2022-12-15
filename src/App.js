import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, ProflePage } from "./pages";
import { CssBaseline, ThemeProvider } from "@mui/material"
import { themeSettings } from "./theme";
import { useSelector } from "react-redux"
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles"

const App = () => {
  const mode = useSelector(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector(state => state.token))
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route  path="/" element={<LoginPage />} />
          <Route path="/home" element={isAuth ? <HomePage />: <Navigate to="/" /> } />
          <Route path="/profile/:userId" element={isAuth ? <ProflePage /> : <Navigate to="/" />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;


//https://github.com/ed-roh/mern-social-media
