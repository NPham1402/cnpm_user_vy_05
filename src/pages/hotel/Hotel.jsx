import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/FooterCustomer";
import Card from "../../components/searchItem/Card_room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const milisecon_per_day=1000*60*60*24;
function substractdate(date1,date2){
  const substrat=Math.abs(date2.getTime()-date1.getTime())
  const chia=Math.ceil(substrat/milisecon_per_day)
  console.log(chia)
  return chia;
}
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location=useLocation()
  const [date, setDate] = useState(location.state.date);
  const [data2, setdata2] = useState("");
  const [data, setdata] = useState(location.state.data);
    const [room, setroom] = useState([]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
useEffect(()=>{
      const headers = {
      id: data.ID_HOME,
    };
   axios
      .get("http://localhost:3001/roomtypes", { headers })
      .then((e) => {
        setroom(e.data)
      })
      .then(function (error) {
        console.log(error);
      });
},[data2])
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="lus" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
       
          <h1 className="hotelTitle">{data.TEN}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.DIA_CHI}</span>
          </div>
          <span className="hotelDistance">
         {data.DIEN_TICH} ㎡
          </span>
          <span className="hotelPriceHighlight">
          {data.SO_TANG} lầu
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Ở ngay trung tâm Thành phố</h1>
              <p className="hotelDesc">
               {data.MO_TA}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Hoàn hảo cho {substractdate(date[0].endDate,date[0].startDate)}-một đêm ở lại</h1>
              <span>
              Tọa lạc ngay trung tâm Krakow, khách sạn này có một
                 điểm vị trí xuất sắc 9,8!
              </span>
              <h2>
                        <div className="d-flex flex-row align-items-center">
          <h4 className="mr-1">{data.oldprice} VNĐ</h4>
          <h4 className="strike-text">{data.finalprice} VNĐ</h4>
        </div><br/> ({substractdate(date[0].endDate,date[0].startDate)} đêm)
              </h2>
            </div>
          </div>
              {room.map((e) => (
          <Card
            data={e}
            date={date}
            option={options}
          />
        ))}

        </div>
        
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
