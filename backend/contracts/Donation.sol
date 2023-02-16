// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Donation {
    struct Donor {
        address who;
        uint amount;
        uint time;
    }

    struct WithdrawClass {
        uint amount;
        address to;
        uint totalVoted;
        uint positiveVoted;
        bool withdrawStatus;
    }

    uint statusIndex;
    uint totalAdmin;

    address headAddress;

    address[] public admins;

    mapping(uint => WithdrawClass) public withDrawList;
    mapping(uint => mapping(address => bool)) public VotedWithdrawStatus;

    constructor() {
        headAddress = msg.sender;
        admins.push(address(0));
    }

    modifier onlyHead() {
        require(msg.sender == headAddress, "Only Chief Executive!");
        _;
    }

    modifier onlyAdmin(uint wichNumber) {
        require(
            VotedWithdrawStatus[wichNumber][msg.sender],
            "Only Chief Executive!"
        );
        _;
    }

    modifier checkWithdrawStatus(uint wichNumber, bool voted) {
        require(!withDrawList[wichNumber].withdrawStatus, "Already approved");
        voted
            ? withDrawList[wichNumber].positiveVoted++
            : withDrawList[wichNumber].positiveVoted;
        withDrawList[wichNumber].totalVoted > 3 &&
            withDrawList[wichNumber].positiveVoted > 3
            ? withDrawList[wichNumber].withdrawStatus = true
            : withDrawList[wichNumber].withdrawStatus;
        _;
    }

    function createWithdraw(uint amount, address to) public onlyHead {
        require(totalAdmin == 5, "There are not enough administrators");
        withDrawList[statusIndex] = WithdrawClass(amount, to, 0, 0, false);
        for (uint i; i < totalAdmin; i++) {
            VotedWithdrawStatus[statusIndex][admins[i]] = true;
        }
        statusIndex++;
    }

    function addAdminAddress(address admin) public onlyHead {
        totalAdmin++;
        require(totalAdmin <= 5, "Maxable add admin amount");
        admins.push(admin);
    }

    function changeAdminAddress(
        address changeAddress,
        address newAddress
    ) public onlyHead {
        uint wichNumber;
        for (uint i; i < totalAdmin; i++) {
            admins[i] == changeAddress ? wichNumber = i : wichNumber;
        }
        admins[wichNumber] = newAddress;
    }

    function votedWithdraw(
        uint wichNumber,
        bool voted
    ) public onlyAdmin(wichNumber) checkWithdrawStatus(wichNumber, voted) {
        VotedWithdrawStatus[wichNumber][msg.sender] = false;
        withDrawList[wichNumber].totalVoted++;
    }
}
