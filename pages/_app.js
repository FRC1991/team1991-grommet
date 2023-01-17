import { grommet, Grommet } from "grommet";
import "../public/admin/noBodyMargins.css";

function MyApp({ Component, pageProps }) {
  global.theme = {
    
    global: {
      colors: {
        brand: "#FF8210",
        "accent-1": "#ff9030",
        platinum: "#E5E4E2",
        gold: "#FFD700",
        silver: "#A9A9A9",
        bronze: "#CD7F32",
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };
  return (
    <Grommet theme={global.theme}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
