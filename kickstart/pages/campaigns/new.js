import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { getCampaignFactoryContract } from "../../core/getCampaignFactoryContract";

function NewCampaign() {
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();

  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    setErrorMessage("");
    try {
      e.preventDefault();

      const factory = getCampaignFactoryContract(library);

      await factory.methods.createCampaign(amount).send({
        from: account,
      });

      router.push("/");
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h3>Create Campaign</h3>
      <Form onSubmit={onSubmit} error={errorMessage.length > 0}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            label="WEI"
            labelPosition="right"
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

export default NewCampaign;
