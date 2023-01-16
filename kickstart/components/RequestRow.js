import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Table } from "semantic-ui-react";
import Web3 from "web3";
import { getCampaignContract } from "../core/getCampaignFactoryContract";

function RequestRow({ request, address, index, approversCount }) {
  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();

  const router = useRouter();

  const [approveLoading, setApproveLoading] = useState(false);
  const [finalizeLoading, setFinalizeLoading] = useState(false);

  const onApprove = async () => {
    setApproveLoading(true);
    try {
      const campaign = getCampaignContract(library, address);

      await campaign.methods.approveRequest(index).send({
        from: account,
      });

      router.replace(`/campaigns/${address}/requests`);
    } catch (err) {
      alert(err.message);
    }
    setApproveLoading(false);
  };

  const onFinalize = async () => {
    setFinalizeLoading(true);
    try {
      const campaign = getCampaignContract(library, address);

      await campaign.methods.finalizeRequest(index).send({
        from: account,
      });

      router.replace(`/campaigns/${address}/requests`);
    } catch (err) {
      alert(err.message);
    }
    setFinalizeLoading(false);
  };

  const web3 = new Web3();

  const readyToFinalize = request.approvalCount > approversCount / 2;

  return (
    <Table.Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{request.description}</Table.Cell>
      <Table.Cell>{web3.utils.fromWei(request.value, "ether")} ETH</Table.Cell>
      <Table.Cell>{request.recipient}</Table.Cell>
      <Table.Cell>
        {request.approvalCount} / {approversCount}
      </Table.Cell>
      <Table.Cell>
        {!request.complete && (
          <Button color="green" onClick={onApprove} loading={approveLoading}>
            Approve
          </Button>
        )}
      </Table.Cell>
      <Table.Cell>
        {!request.complete && (
          <Button secondary onClick={onFinalize} loading={finalizeLoading}>
            Finalize
          </Button>
        )}
      </Table.Cell>
    </Table.Row>
  );
}

export default RequestRow;
