import React from "react";
import AWPDetail from "../Components/AWPDetail";
import TransactionsTable from "../Components/TransactionsTable";
import Seo from "../Components/Seo";
import config from "../utils/config";

function InvestmentDetail() {
  return (
    <div className="App">
      <Seo
        title={config.siteName}
        description={config.description}
        url={`${config.siteUrl}`}
        image={config.image}
        keywords={config.keywords}
      />
      <AWPDetail />
      <TransactionsTable />
    </div>
  );
}

export default InvestmentDetail;
