import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, CardGroup, Grid } from "semantic-ui-react";
import ContributeForm from "../../../components/ContributeForm";
import Layout from "../../../components/Layout";
import { getCampaignContract } from "../../../core/getCampaignFactoryContract";
import shortenAccount from "../../../utils/shortenAccount";
import { getLibrary, httpProvider } from "../../_app";

Campaign.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  const library = getLibrary(httpProvider);
  const campaign = getCampaignContract(library, address);

  const summary = await campaign.methods.getSummary().call();

  return {
    minimumContribution: summary["0"],
    balance: library.utils.fromWei(summary["1"], "ether"),
    requestsCount: summary["2"],
    approversCount: summary["3"],
    manager: summary["4"],
  };
};

function Campaign({
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) {
  const router = useRouter();
  const { address } = router.query;

  return (
    <Layout>
      <h3>Campaign Details</h3>
      <Grid>
        <Grid.Column width={10}>
          <CardGroup
            items={[
              {
                header: shortenAccount(manager),
                meta: "Address of Manager",
                description:
                  "The manager created this campaign and can create requests to withdraw money.",
              },
              {
                header: minimumContribution,
                meta: "Minimum Contribution (Wei)",
                description:
                  "You must contribute at least this much wei to become a contributor.",
              },
              {
                header: requestsCount,
                meta: "Number of Requests",
                description:
                  "A request tries to withdraw money from the contract. Requests must be approved by approvers.",
              },
              {
                header: approversCount,
                meta: "Number of Approvers",
                description:
                  "Number of people who have already contributed to this campaign.",
              },
              {
                header: balance,
                description:
                  "This balance is how much money this campaign has left to spend.",
                meta: "Campaign Balance (ether)",
              },
            ]}
          />
          <br />
          <Link href={`/campaigns/${address}/requests`}>
            <Button primary>View Requests</Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={6}>
          <ContributeForm address={address} />
        </Grid.Column>
      </Grid>
    </Layout>
  );
}

export default Campaign;
