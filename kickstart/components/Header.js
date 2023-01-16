import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { injected } from "../core/connector";

function Header() {
  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();
  return (
    <div>
      <Menu>
        <Menu.Item>
          <Link href="/">
            <h3>CrowdCoin</h3>
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link href="/">Campaigns</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/campaigns/new">+</Link>
          </Menu.Item>
          <Menu.Item>
            {active ? (
              <Button
                onClick={() => {
                  deactivate();
                }}
              >
                Disconnect
              </Button>
            ) : (
              <Button
                onClick={() => {
                  activate(injected);
                }}
              >
                Connect
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
