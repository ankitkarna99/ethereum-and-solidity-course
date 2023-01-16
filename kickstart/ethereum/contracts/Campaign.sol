// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint min) public {
        Campaign newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address[] memory){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    Request[] public requests;

    constructor(uint min, address creator)  {
        manager = creator;
        minimumContribution = min;
    }

    function contribute () public payable {
        require(msg.value >= minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function getSummary() public view returns(uint, uint, uint,uint, address) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager 
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request storage newRequest = requests.push();

        newRequest.description= description;
        newRequest.value= value;
        newRequest.recipient= payable(recipient);
        newRequest.complete= false;
        newRequest.approvalCount= 0;
    }

    function approveRequest(uint index) public {
        require(approvers[msg.sender]);

        Request storage request = requests[index];

        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        require(msg.sender == manager);
        
        Request storage request = requests[index];

        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}