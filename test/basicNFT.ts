import {expect} from "./chai-setup";
import {ethers, deployments, getNamedAccounts} from 'hardhat';
import { Deployment } from "hardhat-deploy/dist/types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import type { BasicNFT } from '../typechain-types';

describe('BasicNFT', () => {
  let deployer: string;
  let basicNFT: BasicNFT;
  let accounts: SignerWithAddress[];

  beforeEach(async () => {
    ({deployer} = await getNamedAccounts()); // provides only addresses, not Signer objects
    accounts = await ethers.getSigners(); //provides access as Signer objects

    await deployments.fixture(['basicNFT']);

    const BasicNFTDeployment: Deployment = await deployments.get('BasicNFT');
    basicNFT = await Promise.resolve(ethers.getContractAt('BasicNFT', BasicNFTDeployment.address) as Promise<BasicNFT>);
  });


  it('Total mints is set to 1000', async () => {
    expect(await basicNFT.totalMints())
      .to.equal(ethers.BigNumber.from('1000'));
  });

  // Note the brackets are used for function overloads in ethersjs
  // contractInstance = contractInstance.connect(accounts[0]);
  // await contractInstance["safeTransferFrom(address,address,uint256)"]
  //   ('0x....', '0x....', ethers.BigNumber.from('5'));


});
