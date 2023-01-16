import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { getCampaignContract } from "../core/getCampaignFactoryContract";

function ContributeForm({ address }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");
  const router = useRouter();

  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();

  const onSubmit = async (e) => {
    setLoading(true);
    setErrorMessage("");
    try {
      e.preventDefault();

      const campaign = getCampaignContract(library, address);

      await campaign.methods.contribute().send({
        from: account,
        value: library.utils.toWei(value, "ether"),
      });

      router.replace(router.asPath);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Form error={errorMessage.length > 0} onSubmit={onSubmit}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Form.Field>
      <Message error header="Oops!" content={errorMessage} />
      <Button primary type="submit" loading={loading}>
        Contribute!
      </Button>
    </Form>
  );
}

export default ContributeForm;
