import "../assets/scss/index.scss";
import Footer from "../components/Footer";
import GradientEl from "../components/Gradient";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/ThemeChanger";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter mode="wait" initial={false}>
      <ThemeProvider>
        <ThemeChanger />
        <NextNProgress />
        <GradientEl />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
