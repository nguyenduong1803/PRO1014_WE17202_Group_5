import Footer from "../../../components/Site/Footer/Footer";
import Header from "../../../components/Site/Header/Header";
import LayoutSite from "../../../components/Site/LayoutSite/LayoutSite"
import Loadings from "../../../components/Site/Loadings/Loadings"

function Home() {

  return (
      <LayoutSite>
        <h2>Home page</h2>
        <Loadings/>
      </LayoutSite>
  );
}

export default Home;