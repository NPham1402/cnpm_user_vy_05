import "./navbar.css"
import axios from "axios"
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';
// import axios from 'axios'
const Navbar = () => {
  const [getCookies,setCookies,removecooki]=useCookies();
  const navigate=useNavigate();
  const [data,setdata]=useState({hoadon:[],solan:0});
  const [Package,setPackage]=useState([]);
  const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
  return`${yyyy}/${mm}/${dd} ${HH}:${MM}:${SS}`;
};
const day = ({ dd, mm, yyyy }) => {
  return`${yyyy}/${mm}/${dd}`;
};
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
  
   useEffect((e) => {
axios.post("https:////gxyvy04g01backend-production.up.railway.app/Customer/getCustomerInfo", {

                TOKEN: getCookies.Customer,

            }).then(res => {
              setCookies("id",res.data.PACKAGE.CUSTOMER_ID)
                setPackage(res.data.PACKAGE);
            })
    axios
      .get("http://localhost:3001/hoadon",{headers:{id:getCookies.id}})
      .then((e) => {
         
           if(data.hoadon.length===0&& data.solan<2)
        {
          setdata({hoadon:e.data,solan:data.solan+1})
        }
      else{
      return;
}      
    
        
      })
      .then(function (error) {
        console.log(error);
      });
  },[]);
  let refund=(token,ID_ROOMTYPE)=>{
    console.log(token)
     const headers = {
      id: token,
      id_home:ID_ROOMTYPE
    };
     axios
      .get("http://localhost:3001/refund",{headers})
      .then((e) => {
          console.log(e.data)          
      }
      );
  }
  return (
    
    <div className="navbar">
      <div className="navContainer">
        <div>
          <i class="fa fa-bars nav_ic" aria-hidden="true"></i>
          <a  type="button" onClick={e=>(navigate("/"))}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" alt=""/>
          </a>
        </div>
        <div className="navItems">
          <i class="fa fa-caret-square-o-down nav_ic flexbox" type="button" aria-hidden="true"> T???i ???ng d???ng</i>
          <i class="fa fa-handshake-o nav_ic flexbox" type="button" aria-hidden="true"> H???p t??c v???i ch??ng t??i</i>
          <i class="fa fa-bookmark nav_ic flexbox" type="button" aria-hidden="true"> ???? l??u</i>
          <i class="fa fa-address-book nav_ic flexbox" type="button" aria-hidden="true"> ?????t ch??? c???a t??i</i>
          {Package ?<><a href={"https://gxy-vy-04-g01-customer-profile.vercel.app/"+getCookies.Customer+"/Profile"}>{Package.CUSTOMER_NAME}</a> <button className="navButton" onClick={e=>{navigate("/");removecooki('Customer')}}>????ng Xu???t</button></> :<> <button className="navButton" onClick={e=>(navigate("/Register"))}>????ng k??</button>
          <button className="navButton" onClick={e=>(navigate("/Login"))}>????ng nh???p</button>
         </>}
          <button className="navButton position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <i class="fa fa-list" aria-hidden="true"></i>
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
                </span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 className="text-title" id="offcanvasRightLabel">
              T???t c??? c??c h??a ????n
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text">
              <div class="list-group">
                      {data.hoadon.map((e) => (
         <div className=" list-group-item list-group-item-action row item">
                  <div class="col-6-sm text-title bg_text">H??A ????N</div>
                  <div className="row">
                      <p className="col-4" >ID:</p>
                    <a  className="col-8 codeBook"style={{ "text-overflow": "ellipsis","overflow": "hidden","white-space": "nowrap"}}>{e.ID_HOA_DON}</a>
                      <p className="col-4" >Ti???n:</p>
                    <h4 className="col-6" >{e.FINAL_PRICE} ??</h4>
           <p className="col-4" >Thanh to??n:</p>
                    <p className="col-8" >{
                    format24Hour( {
  dd: formatData(new Date(e.PAY_TIME).getDate()),
  mm: formatData(new Date(e.PAY_TIME).getMonth() + 1),
  yyyy: new Date(e.PAY_TIME).getFullYear(),
  HH: formatData(new Date(e.PAY_TIME).getHours()),
  hh: formatData(formatHour(new Date(e.PAY_TIME).getHours())),
  MM: formatData(new Date(e.PAY_TIME).getMinutes()),
  SS: formatData(new Date(e.PAY_TIME).getSeconds()),
})}</p>
      <p className="col-4" >ng??y ?????t:</p>
                    <p className="col-8" >{
                      day( {
                      dd: formatData(new Date(e.NGAY_NHAN_PHONG).getDate()),
                      mm: formatData(new Date(e.NGAY_NHAN_PHONG).getMonth() + 1),
                      yyyy: new Date(e.NGAY_NHAN_PHONG).getFullYear(),
                    })
                    }</p>
                    <p className="col-4" >ng??y tr???:</p>
                    <p className="col-8" >{
                      day( {
                      dd: formatData(new Date(e.NGAY_TRA_PHONG).getDate()),
                      mm: formatData(new Date(e.NGAY_TRA_PHONG).getMonth() + 1),
                      yyyy: new Date(e.NGAY_TRA_PHONG).getFullYear(),
                    })
                    }</p>
                    <button class="btn btn-secondary btn-sm center" onClick={c=>{refund(e.ID_HOA_DON,e.ID_ROOMTYPE)}} >Refund</button>
                  </div>
                </div>
         
        ))}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar