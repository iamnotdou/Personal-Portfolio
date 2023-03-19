import "../assets/scss/index.scss";
import Footer from "../components/Footer";
import GradientEl from "../components/Gradient";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/ThemeChanger";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import Presence from "../components/Presence";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextNProgress />
      <GradientEl />
      <Presence />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
