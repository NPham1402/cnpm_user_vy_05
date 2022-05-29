import React, { useState } from 'react'
import "./chitiet.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

export default function Chi_tiet() {

  return (
    <div>    
      <Navbar />
      <Header type="lus" />
      <div className='listContainer'>
        <label className='title-book-a'>Thông tin chi tiết hóa đơn</label>
      </div>
      <div className='list'>
        <div className='listContainer'>
          <div className='container'>
            <div className='boxLeft'>
              <div className='row'>
                <div className='col-8'>
                  <div className='row'>
                    <label className='textTitle'>Khách sạn và căn hộ Seashore</label>
                    <label>(Seashore Hotel & Apartment )</label>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='row'>
                        <label className='textContent'>Ngày nhận phòng</label>
                        <label>24 May 2022</label>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='row'>
                        <label className='textContent'>Ngày trả phòng:</label>
                        <label>25 May 2022</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <label className='textTitle'>Deluxe Double Room, Mountain View</label>
              <div className='row'>
                <div className='col-6'>
                  <br/>
                  <div className='row'>
                    <div className='col-6 textContent'>Khách/phòng</div>
                    <div className='col-6'>2 khách</div>
                  </div>
                  <div className='row'>
                    <div className='col-6 textContent'>Kiểu giường</div>
                    <div className='col-6'>1 giường cỡ lớn</div>
                  </div>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                  <br/>
                  <div className='row'>
                    <div className='col-6 textContent'>Tiện ích</div>
                    <div className='col-6'>
                      <div className='row'>
                        <div className='gr_text'> Miễn phí Wifi</div>
                        <div className='gr_text'> 1 phòng</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className='container'>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h1 className="textTitle">Chi tiết giá</h1>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div className="boxLeft">
                    <div className="row">
                        <div className="col-6 textTitle_sm">Giá tiền</div>
                        <div className="col-6 infoUser pri_right">909.876  VND</div>
                    </div>
                    <div className="row">
                        <div className="col-6 textTitle_sm">Voucher</div>
                        <div className="col-6 infoUser pri_right">0  VND</div>
                    </div>
                    <div className="row">
                        <div className="col-6 textTitle_sm">Giftvoucher</div>
                        <div className="col-6 infoUser pri_right">0  VND</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-6 textTitle_sm">Tổng tiền</div>
                        <div className="col-6 infoUser pri_right">909.876  VND</div>
                    </div>
                  </div>
                  <div class="alert alert-success" role="alert">
                    Đã thanh toán
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
         
        </div>
        <div>
          <br/>
          <div className='boxRight'>
            <div className='row textTitle'>Chi tiết người liên lạc</div>
            <hr/>
            <div className='row infoUser'>NGUYEN NGOC THANH TAM</div>
            <div className='row infoUser'>+840707391062</div>
            <div className='row infoUser'>nguyenxxx110@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}
