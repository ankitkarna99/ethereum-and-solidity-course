import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card, CardGroup } from "semantic-ui-react";
import Layout from "../components/Layout";
import { injected } from "../core/connector";
import { getCampaignFactoryContract } from "../core/getCampaignFactoryContract";
import { getLibrary, httpProvider } from "./_app";

IndexPage.getInitialProps = async (ctx) => {
  const library = getLibrary(httpProvider);
  const factory = getCampaignFactoryContract(library);

  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};

function IndexPage({ campaigns }) {
  const renderCampaigns = () => {
    const items = campaigns.map((campaign) => ({
      header: campaign,
      description: <Link href={"/campaigns/" + campaign}>View Campaign</Link>,
      fluid: true,
    }));

    return <CardGroup items={items} />;
  };

  return (
    <Layout>
      <div>
        <div>
          <h3>Open Campaigns</h3>
          <Link href="/campaigns/new">
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </Link>
          {renderCampaigns()}
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
