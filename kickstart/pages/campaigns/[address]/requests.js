import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Tab, Table } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import RequestRow from "../../../components/RequestRow";
import { getCampaignContract } from "../../../core/getCampaignFactoryContract";
import { getLibrary, httpProvider } from "../../_app";

const { Header, HeaderCell, Body, Row } = Table;

Requests.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  const library = getLibrary(httpProvider);
  const campaign = getCampaignContract(library, address);

  const count = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(count))
      .fill()
      .map((el, index) => campaign.methods.requests(index).call())
  );

  console.log(requests);

  return {
    requests,
    approversCount,
    requestCount: count,
  };
};

function Requests({ requests = [], approversCount, requestCount }) {
  const router = useRouter();
  const { address } = router.query;

  return (
    <Layout>
      <h3>Requests</h3>

      <Link href={"/campaigns/" + address + "/add-request"}>
        <Button primary floated="right">
          Add Request
        </Button>
      </Link>
      <br />
      <br />
      <br />
      <div>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {requests.map((request, index) => (
              <RequestRow
                key={index}
                index={index}
                address={address}
                request={request}
                approversCount={approversCount}
              />
            ))}
          </Body>
        </Table>

        <div>Found {requestCount} requests.</div>
      </div>
    </Layout>
  );
}

export default Requests;
