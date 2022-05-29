import React, { useState } from 'react'
import "./receipt.css"
import { format } from "date-fns";
import { DateRange } from "react-date-range";
export default function Receipt(props) {
  const [date, setDate] = useState(props.date);
const [openDate, setOpenDate] = useState(false);
console.log(props.option)
  console.log()
  return (
    <div>
      <label className="title-receipt">Biên lai</label>
      <div className='receipt'>
        <div className='row namePro'>{props.namehome}</div>
        <div className='row nameLegal'>{props.nameroom}</div>
        <br/>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Ngày check-in:</div>
            <div className='col-7'> <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
          </div>
        </div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Ngày check-out:</div>  
            <div className='col-7'><span onClick={() => setOpenDate(!openDate)}>{` ${format(date[0].endDate, "MM/dd/yyyy")}`}</span></div>
          </div>
        </div>
        <hr/>
        <div className='row namePro'>(1x) Superior Twin Room</div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Người lớn:</div>
            <div className='col-7'>{props.option.adult} người</div>
          </div>
        </div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Trẻ em:</div>  
            <div className='col-7'>{props.option.children} người</div>
          </div>
        </div>
        <br/>
      </div>
    </div>
    
  )
}
