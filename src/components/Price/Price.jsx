import axios from "axios";
import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./price.css"
const vocher=[
    {title:"Deal khách sạn 6.6 theo điểm đến",value:100000,status:true,},
    {title:"Chơi hè cùng với Xperience!",value:150000,status:true,},{title:"Đối tác đặc quyền Ưu tú",value:100000,status:true,},{title:"Đối tác đặc quyền Cao cấp",value:100000,status:true,},{title:"Siêu Sale 6.6 cháy nhất mùa hè!",value:140000,status:true,},{title:"Vòng quanh thế giới",value:100000,status:true,},
]
const gilfvocher=[
    {title:"Chơi hè cùng với Xperience!",value:100000,status:true,},
    {title:"KHỞI ĐỘNG SALE 6.6",value:150000,status:true,},{title:"Sale Xperience 6.6 giảm tới 30% cùng mã giảm thêm 100K!",value:100000,status:true,},{title:"Vòng quanh thế giới",value:100000,status:true,},{title:"Flash Hour 10H-12H",value:140000,status:true,},{title:"Flash Sale mùa hè vẫy gọi! ",value:100000,status:true,},
]
const Price = (props) => {
 
    const [voucherUse,setVoucher]=useState(false);
    const [giftUse,setGift]=useState(false);
  useEffect(() => {
    const headers = {
      user_id: "142",
      partner_id:"db8c54d0-48a0-4f42-b0a8-0fc2c523097b"
    };
    axios
      .get(" http://128.199.241.206:8080/api/v1/user/voucher/eligible?typeVoucher=biet-thu", { headers })
      .then((e) => {
        console.log(e.data)
      })
      .then(function (error) {
        console.log(error);
      });
  }, []);
    return(
        <div>
            <h1 className="title-booking">Chi tiết giá</h1>
            <div className="boxLeft">
                <div className="row">
                    <div className="col-6 pad_left textTitle_sm">Giá tiền</div>
                    <div className="col-6 infoUser pri_right">{props.price}  VND</div>
                </div>
                <div className="row">
                    <div className="col-2 pad_left textTitle_sm">Voucher</div>
                    <div class="col infoUser form-check form-switch">
                        <input class="form-check-input" type="checkbox" value={voucherUse} onChange={()=>setVoucher(!voucherUse)} id="flexSwitchCheckDefault"/>
                    </div>
                </div>
                {voucherUse?
                    <div>
                        <div className="boxSelect row">
                            <select class="form-select" aria-label="Default select example"  onChange={e=>(props.setvaluevoucher({vouchers:e.target.value,giftvoucher:props.valuevoucher.giftvoucher}))}>
                                { vocher.map(vocher=> <option value={vocher.value}>{vocher.title}</option>)}
                                {/* {data.map(e=><option value={}></option>)} */}
                            </select>
                            <hr/>
                            <div className="row">
                                <div className="col-6 textContent">Tiền Voucher</div>
                                <div className="col-6 pri_right">{props.valuevoucher.vouchers}  VND</div>
                            </div>
                            <div className="row">
                                <div className="col-6 textContent">Giảm tối đa</div>
                                <div className="col-6 pri_right">0  VND</div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    
                    :null}
                
                <div className="row">
                    <div className="col-2 pad_left textTitle_sm">Gift</div>
                    <div class="col infoUser form-check form-switch">
                        <input class="form-check-input" type="checkbox" value={giftUse} onChange={()=>setGift(!giftUse)} id="flexSwitchCheckDefault"/>
                    </div>
                </div>
                {giftUse?
                    <div className="boxSelect row">
                        <select class="form-select"   onChange={e=>(props.setvaluevoucher({vouchers:props.valuevoucher.vouchers, giftvoucher:e.target.value}))} aria-label="Default select example">
                            { gilfvocher.map(vocher=> <option value={vocher.value}>{vocher.title}</option>)}
                        </select>
                        <hr/>
                        <div className="row">
                            <div className="col-6 textContent">Tiền Gift Voucher</div>
                            <div className="col-6 pri_right">{props.valuevoucher.giftvoucher}  VND</div>
                        </div>
                        <div className="row">
                            <div className="col-6 textContent">Giảm tối đa</div>
                            <div className="col-6 pri_right">0  VND</div>
                        </div>
                    </div>
                    :null}
                <hr/>
                <div className="row">
                    <div className="col-6 textTitle_sm">Tổng tiền</div>
                    <div className="col-6 infoUser pri_right">{props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher}  VND</div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Price