import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, Grid } from "@mui/material";
import Footer from "Components/Footer";
import Header from "Components/Header";
import routes from "Routes";
import DefaultTheme from "Theme";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Container maxWidth={'lg'}>
        <Grid sx={{
          p: 2
        }}>
          <Header
            routes={routes}
          />
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
