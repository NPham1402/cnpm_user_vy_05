import React, { Component } from "react";
import "./Promotion.css";

class Promotion extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 title">
            <label>Khuyến mãi yêu thích</label>
          </div>
          <div className="col-4">
            <a
              href="https://www.traveloka.com/vi-vn/promotion"
              class="text-decoration-underline"
            >
              Xem thêm khuyến mãi
            </a>
          </div>
        </div>
        <div className="row promotion">
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/04/1649060578062-63924d21b5d36b2324ebced68cdafe75.jpeg?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641539009800-25c30296440ef5ee1bf32645dad38ba6.jpeg?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
        </div>
        <div className="row promotion">
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/02/28/1646037390722-542c35c8a764000285561b5a4cbba859.png?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/01/1648790182290-9397c0d6983d09b8f0a70e99b768c710.jpeg?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/03/23/1648028786543-1edc5334b1f76c4570efe9c153c5d41b.jpeg?tr=h-150,q-75,w-296"
              class="img-promotion"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
