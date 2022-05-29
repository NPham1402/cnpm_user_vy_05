import "./navbar.css"
import axios from "axios"
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
// import axios from 'axios'
const Navbar = () => {
  const [getCookies,setCookies,removecooki]=useCookies();
  const navigate=useNavigate();
  const [data,setdata]=useState({hoadon:[],solan:0});
  const [infor,setinfor]=useState(null);  
   if(getCookies.Customer&&infor===null){
    console.log(getCookies.Customer)
               setinfor(jwt_decode(getCookies.Customer).CUSTOMER_PACKAGE)
  }
   useEffect((e) => {
    axios
      .get("http://localhost:3001/hoadon")
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
  });
  let refund=(token)=>{
    console.log(token)
     const headers = {
      id: token,
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
          <a type="button" onClick={e=>(navigate("/"))}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" />
          </a>
        </div>
        <div className="navItems">
          <i class="fa fa-caret-square-o-down nav_ic flexbox" type="button" aria-hidden="true"> Tải ứng dụng</i>
          <i class="fa fa-handshake-o nav_ic flexbox" type="button" aria-hidden="true"> Hợp tác với chúng tôi</i>
          <i class="fa fa-bookmark nav_ic flexbox" type="button" aria-hidden="true"> Đã lưu</i>
          <i class="fa fa-address-book nav_ic flexbox" type="button" aria-hidden="true"> Đặt chỗ của tôi</i>
          {infor ?<><a href={"https://gxy-vy-04-g01-customer-profile.vercel.app/"+getCookies.Customer+"/Profile"}>{infor.CUSTOMER_NAME}</a> <button className="navButton" onClick={e=>{navigate("/");removecooki('Customer')}}>Đăng Xuất</button></> :<> <button className="navButton" onClick={e=>(navigate("/Register"))}>Đăng ký</button>
          <button className="navButton" onClick={e=>(navigate("/Login"))}>Đăng nhập</button>
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
              Tất cả các hóa đơn
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text">
              <div class="list-group">
                      {data.hoadon.map((e) => (
          <div className=" list-group-item list-group-item-action row">
                  <div class="col-6-sm text-title">Hóa đơn</div>
                  <div className="row">
                      {console.log(e)}
                    <a className="col-6 codeBook"style={{ "text-overflow": "ellipsis","overflow": "hidden","white-space": "nowrap"}}>{e.ID_HOA_DON}</a>
                    <label className="col-6" >{e.TOTAL_PRICE}  VND</label>
                    <button onClick={c=>{refund(e.ID_HOA_DON)}} >Refund</button>
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