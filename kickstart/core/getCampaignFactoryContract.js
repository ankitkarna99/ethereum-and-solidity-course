import compiledCampaignFactory from "../ethereum/build/CampaignFactory.json";
import compiledCampaign from "../ethereum/build/Campaign.json";

const address = "0x530f10F63A4aE144EA183f0dfA2424Cd6c37A614";

export const getCampaignFactoryContract = (library) =>
  new library.eth.Contract(compiledCampaignFactory.abi, address);

export const getCampaignContract = (library, address) =>
  new library.eth.Contract(compiledCampaign.abi, address);
