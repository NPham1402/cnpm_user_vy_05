import React, { useEffect } from "react";
import "./searchItem.css";  

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card(props) {
  const navigate=useNavigate();
  return (
        
    <div className="row p-2 bg-white border rounded">
     
      <div className="col-md-3 mt-1">
        <img
          className="img-fluid img-responsive rounded product-image"
          src={props.data.LINK}
          alt=""
        />
        {console.log(props.idpar)}
      </div>
      <div className="col-md-6 mt-1">
        <div className="d-flex flex-row">
          <div className="ratings mr-2">
            <FontAwesomeIcon icon="location_on"/>
          </div>
          <h4 >{props.data.TEN_PHONG} </h4>
        </div>
        <p className="text-justify text-truncate para mb-0">
      {props.data.TIEN_NGHI} 
          <br />
          <br />
        </p>
                <p className="text-justify text-truncate para mb-0">
   Giường:   {props.data.LOAI_GIUONG} 
        </p>
                        <p className="text-justify text-truncate para mb-0">
    Người: {props.data.SO_NGUOI}
        </p>
      </div>
      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
        <div className="d-flex flex-row align-items-center">
          <h4 className="mr-1">{props.data.PRICE_PHONG.toLocaleString()} VNĐ</h4>
        </div>
        <h6 className="text-success">Còn chỗ</h6>
        <div className="d-flex flex-column mt-4">
            <br/>
            
        <button className="btn btn-primary btn-sm" onClick={e=>{navigate("/hoadon",{state:{data:props.data,date:props.date,option:props.option,idpar:props.idpar}})}}> Đặt bây giờ</button>

 
        </div>
      </div>
    </div>
  );
}

export default Card;
