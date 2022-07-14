// import Footer from "../../../components/Site/Footer/Footer";
import Footer from "../../../components/Site/FooterContent/Footer";
import Header from "../../../components/Site/Header/Header";
import LayoutSite from "../../../components/Site/LayoutSite/LayoutSite"
import { useState } from "react"
// import Loadings from "../../../components/Site/Loadings/Loadings"
import ContentHome from '../../../components/Site/ContentHome/ContentHome';


function Home() {
  
  return (
    <LayoutSite >
      <ContentHome />
    </LayoutSite>
  );
}

export default Home;