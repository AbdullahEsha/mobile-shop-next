import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
};

export default App;
