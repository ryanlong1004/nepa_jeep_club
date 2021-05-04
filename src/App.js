import CssBaseline from "@material-ui/core/CssBaseline";
import { default as React } from "react";

import Home from "./components/Home";
import "./styles/main.scss";
import { Helmet } from "react-helmet";




function todaysDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}${mm}${dd}`
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NEPA Jeep Club {todaysDate()}</title>
        <meta name="description" content="NEPA Jeep Club is gathering Jeep and 4x4 enthusiasts for trail rides, gatherings, and events in Northeast Pennsylvania and surrounding areas." />
        <meta name='robots' content='index, follow' />


        {/* Open Graph */}
        <meta property='og:type' content='article' />
        <meta property='og:title' content='NEPA Jeep Club' />
        <meta property='og:description' content='NEPA Jeep Club is gathering Jeep and 4x4 enthusiasts for trail rides, gatherings, and events in Northeast Pennsylvania and surrounding areas.' />
        <meta property='og:url' content='nepajeep.club' />
        <meta property='og:site_name' content='nepajeep.club' />
        {/* Twitter */}
        <meta name='twitter:title' content='NEPA Jeep Club' />
        <meta name='twitter:description' content='NEPA Jeep Club is gathering Jeep and 4x4 enthusiasts for trail rides, gatherings, and events in Northeast Pennsylvania and surrounding areas.' />
        <meta name='twitter:site' content='@nepajeep' />
        <meta name='twitter:creator' content='@nepajeep' />
      </Helmet>
      <CssBaseline />
      <main>
        <Home />
      </main>

    </div>
  );
}

export default App;
