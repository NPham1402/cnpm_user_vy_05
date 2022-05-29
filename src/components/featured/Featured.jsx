import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/fur1616991815.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Lạt</h1>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://vcdn1-dulich.vnecdn.net/2022/04/14/Hoi-An-VnExpress-5851-16488048-2749-1436-1649912668.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=DFnJCMttyOHvf0w7IMYD8w"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hội An</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.xevipnoibai.com/wp-content/uploads/2019/04/Cao-bang.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cao Bằng</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
