import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Stripaddcard(props) {
  const navigate=useNavigate()
const date = new Date();
  const publishableKey =
    'pk_test_51KysBGC4c4me30BTdO6jARHtsFThCnAVcsxOeu9tumGlrOHf1XstZNJaV4UWPLNxIIx4fB4W3Pb6d1kgsszy8FBw0001H8C0ok';
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: 5,
  });
const formatData = (input) => {
  if (input > 9) {
    return input;
  } else return `0${input}`;
};
  
// Function to convert
// 24 Hour to 12 Hour clock
const formatHour = (input) => {
  if (input > 12) {
    return input - 12;
  }
  return input;
};
  
// Data about date
const format = {
  dd: formatData(date.getDate()),
  mm: formatData(date.getMonth() + 1),
  yyyy: date.getFullYear(),
  HH: formatData(date.getHours()),
  hh: formatData(formatHour(date.getHours())),
  MM: formatData(date.getMinutes()),
  SS: formatData(date.getSeconds()),
};

const format2 = {
  dd: formatData(props.date[0].startDate.getDate()),
  mm: formatData(props.date[0].startDate.getMonth() + 1),
  yyyy: props.date[0].startDate.getFullYear(),
};
const format3 = {
  dd: formatData(props.date[0].endDate.getDate()),
  mm: formatData(props.date[0].endDate.getMonth() + 1),
  yyyy: props.date[0].endDate.getFullYear(),
};
const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
  return`${yyyy}/${mm}/${dd} ${HH}:${MM}:${SS}`;
};
const day = ({ dd, mm, yyyy }) => {
  return`${yyyy}/${mm}/${dd}`;
};
console.log(format24Hour(format))
  const payNow = async token => {
   console.log(token)
    try {
      const response = await axios({
        url: 'http://localhost:3001/payment',
        method: 'post',
        data: {
          amount:((props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher)/23000).toFixed(0),
          token,
          roomid:props.data.ID_ROOMTYPE,
          datetime:format24Hour(format),
    ngaynhan:day(format2),
    ngaytra:day(format3),
    totalprice:props.price,
    lastprice:props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher,
        },
      });
      if (response.status === 200) {
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
        <div className="row">
        <div className='row'>
                                    <div className='col-5 title-price'>Tổng tiền:</div>
                                    <div className='col-7 priceNum'>{props.price}  VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 title-price'>Voucher:</div>
                                    <div className='col-7 priceNum'>{props.valuevoucher.vouchers} VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-6 title-price'>GiftVoucher:</div>
                                    <div className='col-6 priceNum'>{props.valuevoucher.giftvoucher} VND</div>
                                </div>
                                <hr/>
                                 <div className='row'>
                                    <div className='col-5 title-price'>Giá cuối:</div>
                                    <div className='col-7 priceNum'>{props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher}  VND</div>
                                </div>
                            </div>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        email='0938224718nguyen@gmail.com'
        amount={((props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher)/23000).toFixed(2)}
        description={`Your total is $${((props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher)/23000).toFixed(2)}`}
        token={payNow}
      />
    </div>
  );
}
export default Stripaddcard;