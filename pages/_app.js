import "../assets/scss/index.scss";
import Footer from "../components/Footer";
import GradientEl from "../components/Gradient";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/ThemeChanger";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeChanger />
      <GradientEl />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
