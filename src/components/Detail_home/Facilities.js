import axios from "axios";
import React, { useEffect, useState } from "react";

function Facilities(props) {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const a = [];
  //  list (props){
  //   return (
  //     <div class="row">
  //       <div class="col-sm">
  //         <h3 class="float-left">props.title1</h3>
  //         <br />
  //         <br />
  //         <ul>
  //           {props.list1.map((e) => {
  //             return <li>{e.listitem1}</li>;
  //           })}
  //         </ul>
  //       </div>
  //       <div class="col-sm">
  //         <h3 class="float-left"> props.title2</h3>
  //         <br />
  //         <br />
  //         <ul>
  //           {props.list2.map((e) => {
  //             return <li>{e.listitem2}</li>;
  //           })}
  //         </ul>
  //       </div>
  //       <div class="col-sm">
  //         <h3 class="float-left">props.title3</h3>
  //         <br />
  //         <br />
  //         <ul>
  //           {props.list3.map((e) => {
  //             return <li>{e.listitem3}</li>;
  //           })}{" "}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };
  useEffect(() => {
    const headers = {
      id: props.id,
    };
    axios
      .get("http://localhost:3001/Facilityhome", { headers })
      .then((e) => {
        a.push(e.data);
        setdata({
          data: e.data,
          status: true,
        });
        console.log(data.data.length);
      })
      .then(function (error) {
        console.log(error);
      });
  }, [data.status]);
  var temp = 0;
  var list1 = [];
  var list2 = [];
  var list3 = [];
  var title1 = "";
  var title2 = "";
  var title3 = "";
  return (
    <div>
      <div className="container">
        <h1 class="text-left">Cơ sở</h1>
        <br />
        {/* {data.data.map((e) => {
          if (temp === data.data.length || temp === 3) {
            <list
              title1={title1}
              title2={title2}
              title3={title3}
              listitem1={list1}
              listitem2={list2}
              listitem3={list3}
            />;
            temp = 0;
          }

          if (temp < 3) {
            if (temp === 0) {
              title1 = e.TEN_LOAI;
            }
          }

          temp++;

          console.log(temp);
        })} */}
      </div>
    </div>
  );
}

export default Facilities;
