import axios from "axios";
import { useState,useEffect } from "react"
import "./price.css"
import { useSnackbar } from 'notistack';
import { useCookies } from 'react-cookie';
const gilfvocher=[
    {title:"Chơi hè cùng với Xperience!",value:100000,status:true,},
    {title:"KHỞI ĐỘNG SALE 6.6",value:150000,status:true,},{title:"Sale Xperience 6.6 giảm tới 30% cùng mã giảm thêm 100K!",value:100000,status:true,},{title:"Vòng quanh thế giới",value:100000,status:true,},{title:"Flash Hour 10H-12H",value:140000,status:true,},{title:"Flash Sale mùa hè vẫy gọi! ",value:100000,status:true,},
]
const Price = (props) => {
     const { enqueueSnackbar, closeSnackbar } = useSnackbar();
       const [getCookies,setCookies,removecooki]=useCookies();
    const [voucherUse,setVoucher]=useState(false);
    const [giftUse,setGift]=useState(false);
      const headers = {
      user_id:getCookies.id ,
      partner_id:"580CAE3E-D445-4DC2-B197-50479B2CCA17",
      app_id:'vy04',
      "Access-Control-Allow-Origin":'*'
    };
    const [voucher,setVoucher2]=useState([]);
  useEffect(() => {
          axios({
      url: "https://gxyvy04g01backend-production.up.railway.app/Customer/getAvailableVoucher",
      method: "post",
      data: {
      TOKEN:getCookies.Customer,
      APP_ID:"APART",
      },
      headers,
    }).then(e=>{
        console.log(e.data.GIFTVOUCHER)
        setVoucher2(e.data)})
  }, []);
    return(
        <div>
            {  console.log(props.valuevoucher.idvoucher)}
            <h1 className="title-booking">Chi tiết giá</h1>
            <div className="boxLeft">
                <div className="row">
                    <div className="col-6 pad_left textTitle_sm">Giá tiền</div>
                    <div className="col-6 infoUser pri_right">{props.price.toLocaleString()}  VND</div>
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
                            <select class="form-select" aria-label="Default select example" onChange={e=>{
                                const temp=e.target.value.split("|");
                                axios.get("https://api.votuan.xyz/api/v1/user/voucher/check-condition?amount="+props.price+"&code="+temp[0]+"&typeVoucher=APART",{headers}).then(e=>{if(e.data.status==='success')
                            {enqueueSnackbar(e.data.message, { variant: 'success', });
                            props.setvaluevoucher({vouchers:e.data.data.amount, giftvoucher:props.valuevoucher.giftvoucher,idvoucher:temp[0],idgiff:props.valuevoucher.idgiff});
                          
                        }
                            else
                            {enqueueSnackbar("Voucher không hợp lệ", { variant: 'error', })}})}}>
                                { voucher.VOUCHERS.map(e=><option value={e.voucherCode+"|"+"EE"}>Mã Voucher:{e.voucherCode} Được áp dụng cho {(e.description)}</option>)}
                            </select>
                            <hr/>
                            <div className="row">
                                <div className="col-6 textContent">Tiền Voucher</div>
                                <div className="col-6 pri_right">{props.valuevoucher.vouchers}  VND</div>
                            </div>
                            <div className="row">
                                <div className="col-6 textContent">Số tiền sau khi khấu trừ:</div>
                                <div className="col-6 pri_right">{props.price-props.valuevoucher.vouchers}  VND</div>
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
                        <select class="form-select"   onChange={e=>{
                                const temp=e.target.value.split("|");
                                console.log(temp[0])
                                axios.get("https://api.votuan.xyz/api/v1/user/gift-card/check-condition?amount="+props.price+"&code="+temp[0]+"&typeVoucher=APART",{headers}).then(e=>{if(e.data.status==='success')
                            {enqueueSnackbar(e.data.message, { variant: 'success', });
                            props.setvaluevoucher({vouchers:props.valuevoucher.vouchers, giftvoucher: e.data.data.amount,idvoucher:props.valuevoucher.idvoucher,idgiff:temp[0]});
                            }
                            else
                            {enqueueSnackbar("Voucher không hợp lệ", { variant: 'error', })}})}}>
                          { voucher.GIFTVOUCHER.map(e=><option value={e.giftCardCode+"|"+"EE"}>Mã Voucher:{e.giftCardCode} Được áp dụng cho {(e.description)}</option>)}
                        </select>
                        <hr/>
                        <div className="row">
                            <div className="col-6 textContent">Tiền Gift Voucher</div>
                            <div className="col-6 pri_right">{props.valuevoucher.giftvoucher}  VND</div>
                        </div>
                        <div className="row">
                            <div className="col-6 textContent">số tiền còn lại khi khấu trừ:</div>
                            <div className="col-6 pri_right">{props.price-props.valuevoucher.giftvoucher}  VND</div>
                        </div>
                    </div>
                    :null}
                <hr/>
                <div className="row">
                    <div className="col-6 textTitle_sm">Số tiền cần thanh toán:</div>
                    <div className="col-6 infoUser pri_right">{props.price-props.valuevoucher.vouchers-props.valuevoucher.giftvoucher}  VND</div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Price