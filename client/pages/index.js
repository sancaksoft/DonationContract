import { createTheme, Paper, Switch, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Dontaion from "../components/Dontaion";
import Navbar from "../components/Navbar";

export default function Home() {
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#de0909",
      },
      mode: dark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Donation Campaign </title>
        <meta
          name="description"
          content="Donation Campaign With Cryptocurrency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Paper>
          <Navbar />
        </Paper>
        <Dontaion />
      </main>
    </ThemeProvider>
  );
}
