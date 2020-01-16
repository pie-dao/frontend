import React from "react";
import AddRemoveLiquidity from "../Components/AddRemoveLiquidity";
import Seo from "../Components/Seo";
import config from "../utils/config";

function AddRemove() {
  return (
    <div className="App">
      <Seo
        title={config.siteName}
        description={config.description}
        url={`${config.siteUrl}`}
        image={config.image}
        keywords={config.keywords}
      />
      <AddRemoveLiquidity />
    </div>
  );
}

export default AddRemove;
