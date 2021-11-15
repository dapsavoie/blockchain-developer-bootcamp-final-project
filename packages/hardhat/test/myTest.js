const { ethers } = require("hardhat");
const { use, expect, assert } = require("chai");
const { solidity } = require("ethereum-waffle");
const { not } = require("ramda");


use(solidity);

describe("My Dapp", function () {
  let myContract;

  before(async () => {
    contract =  await ethers.getContractFactory("YourCollectible");
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.notEqual(address, 0x0)
    })
  })

  before(async () => {
    contract =  await ethers.getContractFactory("YourCollectible");
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.equal(address, undefined)
    })
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.equal(address, null)
    })
})

describe('deployment', async () => {
  it('deploys successfully', async () => {
    const tokenURI = contract.tokenURI
    assert.equal(tokenURI, null)
  })
})

describe('deployment', async () => {
  it('deploys successfully', async () => {
    const tokenURI = contract.tokenURI
    assert.notEqual(tokenURI > 0)
  })

it('should be able to update the uri', async function() {
  const tokenURI = contract.setTokenURI
  await contract.setTokenURI('foo')
  assert.equal(await contract.baseTokenURI(), 'foo')
})
})
})


      // assert.notEqual(address, '')
      // assert.notEqual(address, null)
      // assert.notEqual(address, undefined)
