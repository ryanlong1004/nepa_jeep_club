import * as React from "react";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      {/* <ProductCategories /> */}
      {/* <ProductHowItWorks /> */}
      <ProductCTA />
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
