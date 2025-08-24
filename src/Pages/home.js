import "../Styles/home.css";
import Bank from "./Sectors/bank";
import FMCG from "./Sectors/fmcg";
import Insurence from "./Sectors/insurence";
import IT from "./Sectors/it";
import Pharma from "./Sectors/pharma";

export default function Home() {
  return (
    <div className="home">
      {/* <IT /> */}
      {/* <Pharma /> */}
      {/* <Bank /> */}
      {/* <Insurence></Insurence> */}
      <FMCG></FMCG>
    </div>
  );
}
