import React, { Component } from 'react';
import "./Banner.css";

class Banner extends Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img srcset='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/05/1649154760228-b15e45139de233f171b03b8402facf3b.jpeg?tr=h-350,q-75,w-700' class="rounded mx-auto d-block"/>
                    </div>
                    <div class="carousel-item">
                        <img srcset="https://ik.imagekit.io/tvlk/image/imageResource/2022/03/14/1647251212678-642b78eddad9dbf07ad0bb73ae6ceba0.png?tr=h-350,q-75,w-700" class="rounded mx-auto d-block"/>
                    </div>
                    <div class="carousel-item">
                        <img srcset="https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647494690299-08d923d61eca3f6655969480b552b53a.png?tr=h-350,q-75,w-700" class="rounded mx-auto d-block"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Banner;