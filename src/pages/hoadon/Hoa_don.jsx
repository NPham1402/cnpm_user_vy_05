import React, { useState } from 'react'
import "./hoa_don.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Infor from "../../components/Payment/Infor";
import Price from '../../components/Price/Price';
import Receipt from '../../components/receipt/Receipt';
import { useLocation } from 'react-router-dom';
import Stripaddcard from '../../components/Stripe/Stripaddcard';

export default function Hoa_don() {
   const location = useLocation();
   const [infor, setinfor] = useState("");
      const [price,setprice]=useState(location.state.data.PRICE_PHONG)
    const [valuevoucher,setvaluevoucher]=useState({vouchers:0,giftvoucher:0})
  return (
    <div>    
      <Navbar />
      <Header type="lus" />
      <div className='listContainer'>
        <label className='title-book-a'>Đặt phòng khách sạn</label>
        <label className='title-book-b'>Nhập thông tin liên hệ và thanh toán</label>
      </div>
      <div className='list'>
        <div className='listContainer'>
          <Infor/>
          <br/>
          <Price price={price} setprice={setprice} valuevoucher={valuevoucher} setvaluevoucher={setvaluevoucher} />
                      <button type="button" className="priceBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tiếp tục
            </button>
            <br/>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thanh Toán</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
              
                </div>
                <div class="modal-footer">
                    
                   <Stripaddcard price={price}  valuevoucher={valuevoucher}  date={location.state.date} data={location.state.data} option={location.state.option} />
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Receipt date={location.state.date} nameroom={location.state.data.TEN_PHONG} namehome={location.state.data.TEN} option={location.state.option}/>
      </div>
    </div>
  )
}
