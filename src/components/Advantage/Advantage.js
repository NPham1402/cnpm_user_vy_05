import React, { Component } from "react";
import "./Advantage.css";

class Advantage extends Component {
  render() {
    return (
      <div className="row">
        <h3 className="title-advantage">
          Tại sao bạn nên đặt biệt thự và căn hộ trên Traveloka?
        </h3>
        <div className="row justify-content-md-center">
          <div className="col-3">
            <div className="row">
              <img
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/30/1564477472138-3c989dd3a3a83d88888815f9c53e6c0c.svg?tr=q-75"
                class="img-advantage"
                alt="..."
              />
              <h4 className="name-advantage">Nhiều lựa chọn</h4>
              <label className="des-advantage">
                Bạn có thể chọn từ hàng nghìn biệt thự và căn hộ trên khắp thế giới
                giới tính. Không bao giờ hết các lựa chọn!
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <img
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/30/1564477473800-be6da5cf2d9aced820f42e31195b95af.svg?tr=q-75"
                class="img-advantage"
                alt="..."
              />
              <h4 className="name-advantage">Đảm bảo ở lại</h4>
              <label className="des-advantage">
                Bạn lo lắng về việc có phòng khi đặt phòng? Chúng tôi đảm bảo bạn sẽ
                ở tại tài sản bạn đã đặt.
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <img
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/30/1564477476456-c02bbbf32947b29f2e6f9e513e8c1165.svg?tr=q-75"
                class="img-advantage"
                alt="..."
              />
              <h4 className="name-advantage">Thanh toán suôn sẻ</h4>
              <label className="des-advantage">
              Bạn có thể chọn từ nhiều phương thức thanh toán khác nhau, bằng cách
                  thẻ hoặc thanh toán khi nhận phòng.
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-3">
            <div className="row">
              <img
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/30/1564477478253-3b23539a7c236138ebbf1db1f3a8300f.svg?tr=q-75"
                class="img-advantage"
                alt="..."
              />
              <h4 className="name-advantage">Hoàn hảo cho kỳ nghỉ</h4>
              <label className="des-advantage">
              Bạn muốn một kỳ nghỉ gia đình hoặc vui vẻ với bạn bè? Bạn có thể thuê
                  cả căn hộ hoặc phòng riêng, tùy thuộc vào nhu cầu của bạn.
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <img
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/30/1564477480337-f86de312386581e84d1291ad8da839dd.svg?tr=q-75"
                class="img-advantage"
                alt="..."
              />
              <h4 className="name-advantage">Dịch vụ hỗ trợ 24/7</h4>
              <label className="des-advantage">
              Vui lòng liên hệ với chúng tôi qua điện thoại, ứng dụng Traveloka
                  hoặc email. Hỗ trợ khách hàng chuyên nghiệp luôn sẵn sàng
                  sẵn sàng giúp bạn 24/7.
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Advantage;
