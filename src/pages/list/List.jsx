import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "axios";
import sv from "date-fns/esm/locale/sv/index.js";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [data2, setdata2] = useState("");
  const [data, setdata] = useState([]);
const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  console.log(destination)

  useEffect(e=>{
      const headers = {
      id: destination.id,
      songuoi: options.adult*options.children,
      sophong: options.room,
    };
    axios
      .get("http://localhost:3001/search_home", { headers })
      .then((e) => {
        setdata(e.data)
      })
      .then(function (error) {
      });
  }, [data2]);
  return (
    <div>
      <Navbar />
      <Header type="lus" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Tìm</h1>
            <div className="lsItem">
              <label>Điểm đến</label>
              <input placeholder={destination.namediadiem} readOnly="true" type="text" autoComplete="on"/>
            </div>
            <div className="lsItem">
              <label>Ngày check-in</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Tùy chọn</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                  Giá tối thiểu <small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá tối đa <small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Người lớn</span>
                  <input
                    type="number"
                    min={1}
                    readOnly="true"
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Trẻ em</span>
                  <input
                    type="number"
                    min={0}
                    readOnly="true"
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Phòng</span>
                  <input
                    type="number"
                    min={1}
                    readOnly="true"
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Tìm</button>
          </div>
          <div className="listResult">
            {data.map((e) => (
          <SearchItem
            data={e}
            date={date}
            options={options}
          />
        ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default List;
