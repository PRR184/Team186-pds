// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// ToDo:-
//[X] AddStateAdmin.
//[X] AddDistrictAdmin.
//[X] AddBags
//[X] AddShops.
//[] RemoveShops.
//[X] mapAadhar_to_Metamask.
//[] GetListofShopIds.
//[] GetListofDistrictIds.
//[X] AddItems.
//[X] TransferBags.
//[X] ReceivedBags.
//[X] makeOrder.
//[X] AddConsumers.
//[X] CheckValidCustomer.
//[] Get Shop Details.
//[] Get List of Districts.
//[] Get List of Shops.
//[] List of Orders.  

contract PDS {

    struct _Shop{
        uint256 id;
        string name;
        address account;
        string location;
        bool exists;
    }

    struct _ItemsAvailable{
        uint256 _id;
        string name;
        uint256 price;
    }

    struct _Bag{
        uint256 id;
        string item;
    }

    struct _Transfer{
        uint256 id;
        uint256 fromId;
        uint256 toId;
        uint256[] bagIds;
        uint256 timestamp;
    }

    struct _Order{
        uint256 id;
        address customerId;
        uint256 shopId;
        uint256[] itemIds;
        uint256[] quantities;
        uint256 timestamp;
    }

    //events
    event Transfered(
        uint256 id,
        uint256 fromId,
        uint256 toId,
        uint256[] bagIds,
        uint256 timestamp
    );
    event Received(
        uint256 id,
        uint256 fromId,
        uint256 toId,
        uint256[] bagIds,
        uint256 timestamp
    );
    event Order(
        uint256 id,
        address customerAddress,
        uint256 shopId,
        uint256[] itemIds,
        uint256[] quantities,
        uint256 timestamp
    );

    //Users memory
    address creator;
    uint256 public quantityOfBag;

    mapping (address=>bool) public stateAdmin;
    mapping (address=>bool) public districtAdmin;
    //Used for Login Purpose.
    mapping (string=>address) public AadharLinked;

    mapping (uint256=>_Shop) public shops;
    mapping (address=> bool) public consumer;
    mapping (uint256 => _ItemsAvailable) public items;
    mapping (uint256 => _Bag) public bags;
    uint256 ordersCount;
    uint256 transfersCount;
    uint256 receivedCount;

    _Order[] public orders;
    _Transfer[] public transferHistory;
    _Transfer[] public receivedHistory;

    constructor(uint256 _quantityOfBag){
        creator = msg.sender;
        quantityOfBag = _quantityOfBag;
    }

    //Adding Users
    function addStateAdmins(address _user) public{
        require(msg.sender == creator);
        stateAdmin[_user]=true;
    }
    function addDistrictAdmins(address _user) public{
        require(stateAdmin[msg.sender]);
        districtAdmin[_user]=true;
    }

    function addShops(uint256 _id, string memory _name, address _recipientAddress,string memory _location) public{
        require(districtAdmin[msg.sender]);
        _Shop memory shop = _Shop(_id, _name, _recipientAddress,_location,true);
        shops[_id]=shop;
    }
    function addConsumer(address _user) public {
        require(districtAdmin[msg.sender]);
        consumer[_user]=true;
    }
    function addBags(uint256 _id, string memory _item) public{
        require(stateAdmin[msg.sender]);
        bags[_id]=_Bag(_id,_item);
    }
    function addItems(uint256 _id,string memory _name,uint256 _price) public{
        require(stateAdmin[msg.sender]);
        items[_id]=_ItemsAvailable(_id,_name,_price);
    }
    function setItems(uint256 _id,uint256 _price) public{
        require(stateAdmin[msg.sender]);
        items[_id].price=_price;      
    }
    function transferedBags(uint256 _fromId, uint256 _toId,uint256[] memory _bagIds)public {
        require(stateAdmin[msg.sender]||districtAdmin[msg.sender]);
        _Transfer memory obj = _Transfer(transfersCount,_fromId,_toId,_bagIds,block.timestamp);
        transfersCount++;
        transferHistory.push(obj);
        emit Transfered(receivedCount,_fromId,_toId,_bagIds,block.timestamp);
    }
    function receivedBags(uint256 _fromId, uint256 _toId,uint256[] memory _bagIds)public {
        require(districtAdmin[msg.sender]||shops[_toId].exists);
        _Transfer memory obj = _Transfer(receivedCount,_fromId,_toId,_bagIds,block.timestamp);
        receivedCount++;
        receivedHistory.push(obj);
        emit Received(receivedCount,_fromId,_toId,_bagIds,block.timestamp);
    }

    function orderMade(address _customer,uint256 _shopId,uint256[] memory _itemIds,uint256[] memory _quantities) public{
        require(shops[_shopId].exists && shops[_shopId].account==msg.sender && consumer[_customer]);
        _Order memory order = _Order(ordersCount,_customer,_shopId,_itemIds,_quantities,block.timestamp);
        orders.push(order);
        ordersCount++;
        emit Order(order.id,_customer,_shopId,_itemIds,_quantities,block.timestamp);

    }

}