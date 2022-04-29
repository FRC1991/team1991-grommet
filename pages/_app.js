import { grommet, Grommet } from "grommet";
import "../public/admin/noBodyMargins.css";

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
