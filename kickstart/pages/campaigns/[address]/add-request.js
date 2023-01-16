import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { getCampaignContract } from "../../../core/getCampaignFactoryContract";

function AddRequest() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();

  const router = useRouter();
  const { address } = router.query;

  const onSubmit = async (e) => {
    setLoading(true);
    setErrorMessage("");
    try {
      e.preventDefault();

      const campaign = getCampaignContract(library, address);

      await campaign.methods
        .createRequest(
          description,
          library.utils.toWei(amount, "ether"),
          recipient
        )
        .send({
          from: account,
        });

      router.push(`/campaigns/${address}/requests`);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };
  return (
    <Layout>
      <Link href={`/campaigns/${address}/requests`}>Back</Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit} error={errorMessage.length > 0}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Value</label>
          <Input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            label="ETH"
            labelPosition="right"
          />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => {
              setRecipient(e.target.value);
            }}
          />
        </Form.Field>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary type="submit" loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}

export default AddRequest;
