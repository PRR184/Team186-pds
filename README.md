# Team 186 - Snake_Eyes

This is the official repository of DotSlash 5.0 Submission for Team 186 - **Snake_Eyes**.

Problem Statement Topic : **Open Innovation**
<br>
Project Name  : **Public Distribution System (PDS)**

Team Members:

- [Raghavendra Reddy](https://github.com/PRR184)
- [Aviraj Rathod](https://github.com/aviraj1703)
- [Hariom Vyas](https://github.com/Hariom1509)


## Inspiration

The covid era taught us that getting a meal, once a day was one of the biggest challenges which a lot of needy people faced. Many **RationShop** owners would store the stock in a large amount which is provided by Government to distribute to the needy ones, but they sell them for higher price, which makes the needy ones suffer. We, as responsible citizens of the nation, wanted to dismantle this situation and help the needy.

## Brief Idea

We intend to provide transparency in the supply-chain of food using Blockchain. The supply would be tracked from the origin till it reaches the end user using Identifiers packed with bags which will be added to the blockchain at each stage of network. Thus, alteration of the records will be impossible. The state government would generate the identifiers which will be further carried to the the district authorities and the ration shops and also the quantities of foods are tracked to verify the distribution between RationShops and Consumers. Thus the verification of goods will be ensured at every checkpoint which ensures that no frauds or corruption take place.

## Working

- Assuming Government has provided a metamask account for every RationCard holder, so it is used in verification and also assuming that weight of bags(Kg) are fixed that are taken in transport.
- After transfer of bags between state to district and district to shops , they need to add transfered and received bagIds, which will be stored on Blockchain and can be verified. This step ensures no missing of bags while transportation.

![Flow Chart](https://github.com/aviraj1703/Team186-pds/blob/readme/img.png)

- At Consumer Level, the shop owner will verify the consumers metamskAccount and will provide the grains(in Kgs), then the consumer will only be allowed to pay using metamsk account given by the government. So, if details provided in the bill are correct, consumer will do the transaction and it gets stored in database.
- We can stop the shop Owner corruption by checking the quantity recieved from district and quantity sold to consumers, and only the real user with government given metamask account will be able to pay to the shopowner.Each and every process going on the network is being stored on blockchain database, so the chance of any kind of fraud activites or malpractices will be vanished.
![Transaction](https://github.com/PRR184/Team186-pds/blob/main/transac.png)


## Building it
- First, we deployed a **Smart Contract** which keeps track of all the users and transactions happenings in the network.
- We used **web3.js** to communicate with the smart contract.
- We fetched the data by capturing the events when transactions happens in the network.
- Lastly, we used ReactJS and fetched data to build the front end of the network.


## Tech Stacks

- Solidity
- React JS
- Truffle
- Ethereum
- MetaMask


## Challenges
- Integrating Blockchain with the frontend while adding and fetching data.
- Grouping the data to **verify the transactions** that are occuring at each stage of the network.

## Learnings and Achievements
- This was the first time we tried to integrate Blockchain code written in solidity along with React JS which turned out to be a great learning experience.
- The 36 hour long hackathon always inspired us at every moment to keep our calm and overcome the bugs which hindered our way.

## Future Plans

- Fetching the Aadhar Card information and linking a crypto account with it to make the transactions through it.
- Implementing this app not just for food grains but also generalizing it for many different commodities.

## Links
- [Demo Video](https://youtu.be/EIseC_4NrEk).

