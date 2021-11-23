# NFT Minting Marketplace

The goal of this project is to developed NFT's to represent real world data from the outcomes of a range of social enterprise projects, scientific projects or environmental projects. The NFT  infrastructure developed will allow a user to transform meta-data into NFT's.

Public Ethereum Address for Certification as an NFT

0xeF7752d59490D4dd156dc60Afe5FA81cf8BFfc79

## Directory Structure

### Important files

1. artwork.json: Edit this to add different metadata and links to art work. 
2. avoiding_common_attacks.txt: This contains 2 ways that the contract is protected from attack vectors.
3. deployed_address.txt" This is the same info as FE access. How to access the rinkeby network version of the app.
4. design_patterns.txt: Info on design patterns of smart contract.

#### Packages folder contents

1. hardhat
2. react-app
3. services
4. subgraph

### Front End Access

1. Rinkeby network

Smart Contract is deployed here

0xABd2Df4466DE29E3aE0c6389689Bd6CA9B10F046

https://rinkeby.etherscan.io/address/0xABd2Df4466DE29E3aE0c6389689Bd6CA9B10F046

https://ipfs.io/ipfs/QmR9WSgkffeapbyJpca6CFsfxdP92Leh3KNHwZpSnEKA6W

2. localhost 

Change to the localhost branch

### Unit Tests

Run '''yarn test''' to test the contract. 

The tests check if the contract can be deployed and verifies the address and token_uri is not set until after its deployed.

# Setting Up the Project

git clone https://github.com/dapsavoie/blockchain-developer-bootcamp-final-project/tree/rinkeby

yarn install 

## Upload the art to IPFS

yarn upload 

## Open another terminal and start the hardhat chain

cd buyer-mints-nft

yarn chain

## In the 3rd terminal 

cd buyer-mints-nft

yarn deploy

yarn start

The app should be visible on localhost:3000 if you deployed locally or on the link above for rinkeby network.
