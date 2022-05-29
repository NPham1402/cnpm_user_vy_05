import axios from "axios";
import React, { useEffect, useState } from "react";

function Detail(props) {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const a = [];

  useEffect(() => {
    const headers = {
      id: props.id,
    };
    axios
      .get("http://localhost:3001/detailhome", { headers })
      .then((e) => {
        a.push(e.data);
        setdata(e.data);
      })
      .then(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
          <>
            <div className="container" key={e.ID_THANH_PHO}>
              <div className="row">
                <h1 class="text-left">Chi tiết</h1>
                <div className="col">
                  <div
                    id="carouselExampleFade"
                    class="carousel slide carousel-fade bg-light"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item ">
                        <img
                          src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10003464-184bd005fbf82b851712c935edf4e5e7.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67816403-9cb659271a4c20ab394936a2006c631d.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="col align-self-end d-flex flex-row justify-content-between">
                      <div class="d-flex flex-column">
                        <h2>{e.TEN}</h2>
                        <h5>
                          <i class="material-icons" font-size="36px">
                            location_on
                          </i>
                          {e.DIA_CHI}
                        </h5>
                        <h5>
                          <span class="badge bg-secondary">Home Stay</span>{" "}
                        </h5>
                      </div>

                      <div class="d-flex flex-column" margin-left="auto">
                        {" "}
                        <p> Giá / phòng / đêm bắt đầu từ</p>
                        <h3>{e.finalprice} VND</h3>
                        <a href="!#" className="btn btn-primary">
                          Đặt bây giờ
                        </a>
                      </div>
                    </div>

                    <></>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Detail;
