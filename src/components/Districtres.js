import React, { Component } from "react";
import { Table } from "reactstrap";
import { groupBy } from "lodash";

function Districtres({ transfered, received, orders }) {
  if (!transfered || !received) window.alert("Error in transactions!");
  const transfers = groupBy(transfered, "fromId");
  const results = Object.values(transfers).map((t) => {
    const shops = t.map((transfer) => {
      const shid = transfer.toId; //d=1 s=100
    //   console.log(shid);
      //     //Orders Group By shopID.
      const shopsa = orders.filter((order) => order.shopId === shid);
      const total = shopsa.reduce((acc, curr) => {
        const currTotal = curr.eachItemQuantities.reduce((acc2, curr2) => {
          return acc2+Number(curr2);
        }, 0);
        return acc + currTotal;
      }, 0);
      return ({
        shopID: shid,
        total: total,
        bags: transfer.Bags.length
      });
    });

    return {
        id: t[0].fromId,
        shopIds: shops.map(shop=>shop.shopID),
        total: shops.map(shop=>shop.total),
        bags: shops.map(shop=>shop.bags),
    };

  });

  console.log("results", results);
  return (
    <div>
      <h1>View of District Results(Assumed Each Bag contains 10Kg)</h1>
      <Table borderless dark hover responsive size="sm" striped >
        <thead style={{'text-align':'centre'}}>
          <tr>
            <th>District Id</th>  
            <th>Shop Id</th>
            <th>No of Bags Sent to Shop</th>
            <th>Total Quantity Sold(Kg)</th>
          </tr>
        </thead>
        <tbody style={{'text-align':'centre'}}>
            {results.map(district=>{
                return(
                    <tr>
                        <td>{district.id}</td>
                        <td>
                        {district.shopIds.map(shop=>{
                                return(
                                    <tr>
                                        <td>{shop}</td>
                                    </tr>
                                )
                            })}
                        </td>
                        <td>
                        {district.bags.map(shop=>{
                                return(
                                    <tr>
                                        <td>{shop}</td>
                                    </tr>
                                )
                            })}
                        </td>
                        <td>
                        {district.total.map(shop=>{
                                return(
                                    <tr>
                                        <td>{shop}</td>
                                    </tr>
                                )
                            })}
                        </td>

                    </tr>
                )
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Districtres;
