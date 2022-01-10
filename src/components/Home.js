import React, { Component } from 'react'
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from '../Logo.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="heading1">
                    <h1 className='head'>Public Distribution System</h1>
                </div>
                <div className='main'>
                    <div class="left">
                        <h4 className='hed head'>
                            Inspiration
                        </h4>
                        <p align-text = 'left'>
                        The covid era taught us that getting a meal, once a day was one of the biggest challenges which a lot of needy people faced. 
                        </p>
                        <p>
                        Many RationShop owners would store the stock in a large amount which is provided by Government to distribute to the needy ones, 
                        <br />
                        but they sell them for higher price, which makes the needy ones suffer.
                        </p>
                        <p>
                        We, as responsible citizens of the nation, wanted to dismantle this situation and help the needy.
                        </p>
                        <p>
                            So, we decided to build a Blockchain project using Web3.js to solve this issue and be a part of Dotslash 5.0.
                        </p>

                    </div>

                    <div class="right">
                        <img class="d-block w-150 h-150" src={img} alt="PDS"/>
                    </div>
                </div>
                <div class = "bottom">
                    <h4 className='hed head'>
                        Objective
                    </h4>
                    <p>
                        We intend to provide transparency in the supply-chain of food using Blockchain. 
                        The supply would be tracked from the origin till it reaches the end user using Identifiers packed with bags 
                        which will be added to the blockchain at each stage of network. 
                        Thus, alteration of the records will be impossible. 
                        The state government would generate the identifiers which will be further carried to the the district 
                        authorities and the ration shops and also the quantities of foods are tracked to verify the distribution between 
                        RationShops and Consumers. Thus the verification of goods will be ensured at every checkpoint which ensures that 
                        no frauds or corruption take place.
                    </p>
                </div>
            </div>
        )
    }
}