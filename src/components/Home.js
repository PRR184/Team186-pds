import React, { Component } from 'react'
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="heading1">
                    <h1 className='head'>Public Distribution System</h1>
                </div>
                <div className='main'>
                    <div class="left">
                        kdvkdjnfvkdjfvndkjfvs
                    </div>

                    <div class="right">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../Logo.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../Logo.png" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../Logo.png" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                    </div>
                </div>
                <div class = "bottom">
                    <ul>
                        <li>
                            Objectives
                            <p>
                                The objective of this project is to ............
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
