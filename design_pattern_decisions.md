Access Control Design Patterns

This is mentioned in chapter 3 in soliditiy contract structure.

In this contract, I am using Ownable to ensure only the creator of the contract can actually create and mint nft's. This protects against any individual with access being able to create NFT's and an error message will be returned if a non-owner were to try. 


Inheritance and Interfaces

My contract inherits the following
- ERC721.sol
- Counters.sol
- Ownable.sol

This is mentioned in chapter 3 under inheritance and interfaces. I chose to use this because if a function has been created by a great mind before me, it is my duty to use it and not re-write redudant, less effective code to do the same thing :)