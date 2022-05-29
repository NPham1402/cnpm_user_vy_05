import React, { Component } from 'react';
import "./Propose.css";

class Mentioned extends Component {
    render() {
        return (
            <div className="row">
                <h2 className="col-12 title-propose">Các điểm đến được đề xuất</h2>
                <div className="row justify-content-md-center">
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/city/vung-tau-city-10009888/" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734018872-8cf76084d31a52616769b1574713bee7.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Vũng Tàu</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/city/da-lat-10010169" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734047420-35a327fc4b7b898a1fb6eaa0a102837d.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Đà Lạt</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/region/da-nang-10010083" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734113957-f556bc7239b5d91b6a5bcc4ed12eb0f4.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Đà Nẵng</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/city/hoi-an-10010308" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734069913-24ab10a7f16e718f12064004491a8446.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Hội An</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/city/phu-quoc-10011570/" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734138196-e0fcb02802688842332b85321a59577a.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Phú Quốc</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/city/nha-trang-10010498" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734164152-9999184b656986c1c0603e35848f9df5.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Nha Trang</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/region/hanoi-10009843" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564734186813-214b87270428028952db66ebc0d836ca.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Hà Nội</p>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.traveloka.com/vi-vn/accommodation/villa/vietnam/area/mui-ne-30010276" target="_self">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564736558289-380f77e835194f1e4487aa4c53e96085.jpeg?tr=q-75,w-222,h-200" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <p class="card-text">Mũi Né</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mentioned;