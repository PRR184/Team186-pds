// Contracts
const PDS = artifacts.require("PDS")

// Utils
const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000' // Ether token deposit address
const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}

const wait = (seconds) => {
    const milliseconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = async function(callback){

    try {
        // Fetch accounts from wallet - these are unlocked
        const accounts = await web3.eth.getAccounts()
        console.log('accounts',accounts);
        const creator = '0xeF557A3d573472413E135eD9Daf4A8b438252094';
        await wait(1);
        const state=accounts[0];
        const d1=accounts[1];
        const d2=accounts[2];
        const s1=accounts[3];
        const s2=accounts[4];
        const s3=accounts[5];
        const c1=accounts[6];
        const c2=accounts[7];
        const c3=accounts[8];
        const c4=accounts[9];

        const stateId = 0;
        const districtId1 = 1;
        const districtId2 = 2;

        const shopId1=100;
        const shopId2=101;
        const shopId3=102;

        const itemId1=100001 //Rice.
        const itemId2=100002 //Wheat.

        // console.log('state',state);
        // console.log('district1',d1);
        // console.log('district2',d2);
        // console.log('shop1',s1);
        // console.log('shop2',s2);
        // console.log('shop3',s3);
        // console.log('consumer1',c1);
        // console.log('consumer2',c2);
        // console.log('consumer3',c3);
        // console.log('consumer4',c4);
        
        // Fetch the deployed token
        const pds = await PDS.deployed()
        console.log('PDS fetched', pds.address)
      
        //creating stateAdmins
        await pds.addStateAdmins(state,{from:creator});
        await wait(1)
        console.log('AddedStateAdmin as', state)

        //creating districtAdmins
        await pds.addDistrictAdmins(d1,{from:state});
        console.log('AddedDistrictAdmin as', d1);
        await pds.addDistrictAdmins(d2,{from:state});
        console.log('AddedDistrictAdmin as', d2);
        await wait(1)

        //Adding shops
        await pds.addShops(shopId1,"Raghav",s1,"More Complex, Miryalaguda",{from:d1});
        console.log('Adding Shops as', s1);
        await pds.addShops(shopId2,"Rahul",s2,"Ram Complex, Miryalaguda",{from:d1});
        console.log('Adding Shops as', s2);
        await pds.addShops(shopId3,"Raju",s3,"Baraf Complex, Miryalaguda",{from:d2});
        console.log('Adding Shops as', s3);
        await wait(1)

        //Adding Consumer
        await pds.addConsumer(c1,{from:d1});
        console.log('Adding Consumers as', c1);
        await pds.addConsumer(c2,{from:d1});
        console.log('Adding Consumers as', c2);
        await pds.addConsumer(c3,{from:d1});
        console.log('Adding Consumers as', c3);
        await pds.addConsumer(c4,{from:d2});
        console.log('Adding Consumers as', c4);
        await wait(1)

        //Adding Items
        await pds.addItems(itemId1,"Rice",1);
        console.log('Adding Items as', itemId1);
        await pds.addItems(itemId2,"Wheat",2); 
        console.log('Adding Items as', itemId2);
        await wait(1)

        //Add Bags
        await pds.addBags(1,"Rice",{from:state});
        await pds.addBags(2,"Rice",{from:state});
        await pds.addBags(3,"Rice",{from:state});
        await pds.addBags(4,"Rice",{from:state});
        await pds.addBags(5,"Rice",{from:state});
        await pds.addBags(6,"Rice",{from:state});
        await pds.addBags(7,"Rice",{from:state});
        await pds.addBags(8,"Rice",{from:state});
        await pds.addBags(9,"Rice",{from:state});
        await pds.addBags(10,"Rice",{from:state});
        await pds.addBags(11,"Wheat",{from:state});
        await pds.addBags(12,"Wheat",{from:state});
        await pds.addBags(13,"Wheat",{from:state});
        await pds.addBags(15,"Wheat",{from:state});
        await pds.addBags(16,"Wheat",{from:state});
        await pds.addBags(17,"Wheat",{from:state});
        await pds.addBags(18,"Wheat",{from:state});
        await pds.addBags(19,"Wheat",{from:state});
        await pds.addBags(20,"Wheat",{from:state});
        console.log('Adding Bags');
        await wait(1)

        //transfer Bags from state1 to district1
        await pds.transferedBags(stateId,districtId1,[1,2,3,4,5,6,11,12],{from:state});
        console.log('Transfer from State to District1');
        await pds.transferedBags(stateId,districtId2,[7,8,9,14,15,16],{from:state});
        console.log('Transfer from State to District2');
        await pds.transferedBags(districtId1,shopId1,[1,2,3,4],{from:d1})
        console.log('Transfer from District1 to Shop1');
        await pds.transferedBags(districtId1,shopId2,[5,6,11,12],{from:d1})
        console.log('Transfer from District1 to Shop2');
        await pds.transferedBags(districtId2,shopId3,[7,8,9,16],{from:d2})
        console.log('Transfer from District2 to Shop3');
        await wait(1)

        //transfer Bags from state1 to district1
        await pds.receivedBags(stateId,districtId1,[1,2,3,4,5,6,11,12],{from:d1});
        console.log('Received from State to District1');
        await pds.receivedBags(stateId,districtId2,[7,8,9,14,15,16],{from:d2});
        console.log('Received from State to District2');
        await pds.receivedBags(districtId1,shopId1,[1,2,3,4],{from:s1})
        console.log('Received from District1 to Shop1');
        await pds.receivedBags(districtId1,shopId2,[5,6,12],{from:s2}) // 11 I kept Missing
        console.log('Received from District1 to Shop2');
        await pds.receivedBags(districtId2,shopId3,[7,8,9,16],{from:s3})
        console.log('Received from District2 to Shop3');
        await wait(1)
        
        //Making Order
        await pds.orderMade(c1,shopId1,[itemId1, itemId2],[25, 50],{from:s1});
        console.log('Transfer from Shop1 to Consumer1');
        await pds.orderMade(c2,shopId1,[itemId1, itemId2],[30, 40],{from:s1});
        console.log('Transfer from Shop1 to Consumer2');
        await pds.orderMade(c3,shopId2,[itemId1, itemId2],[20, 1],{from:s2});
        console.log('Transfer from Shop2 to Consumer3');
        await pds.orderMade(c4,shopId3,[itemId1, itemId2],[29, 49],{from:s3});
        console.log('Transfer from Shop3 to Consumer4');
        await wait(1)
    
      }
      catch(error) {
        console.log(error)
      }
    callback();
}