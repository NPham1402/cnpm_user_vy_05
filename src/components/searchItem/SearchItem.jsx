import "./searchItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchItem = (props) => {
  console.log(props.data.oldprice)
   const navigate = useNavigate();
   const [datachange,setdata]=useState({
     data:props.data,
     date:props.date,
     options:props.options
   })
     const handleSearch = () => {
    navigate("/hotels_detail", { state:datachange });
    
  };
  return (
    <div className="searchItem">
      <img
        src={props.data.LINK}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.data.TEN}</h1>
        <span className="siDistance">{props.data.DIEN_TICH} ㎡ </span>
        
        <span className="siSubtitle">
        <p white-space= "nowrap" overflow= "scroll">{props.data.SO_TANG} lầu</p>
        </span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siCancelOp">Hủy miễn phí </span>
        <span className="siCancelOpSubtitle">
       {props.data.DIA_CHI}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Xuất sắc</span>
          <button>⭐</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{props.data.oldprice} VNĐ</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <button className="siCheckButton" onClick={handleSearch}>Xem tình trạng</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
