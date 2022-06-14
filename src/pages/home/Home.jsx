import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/FooterCustomer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Promotion from "../../components/Promotion/Promotion";
import Propose from "../../components/Propose/Propose";
import Partner from "../../components/Partner/Partner";
import Advantage from "../../components/Advantage/Advantage";
import Explore from "../../components/Explore/Explore";
import { useCookies } from 'react-cookie';
const Home = () => {
 const [getCookies]=useCookies();
  return (
    <div>
      <Navbar/>
      <Header type="lists" token={getCookies.Customer}/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle ">Duyệt theo loại thuộc tính</h1>
        <PropertyList/>
        <h1 className="homeTitle">Những ngôi nhà mà khách yêu thích</h1>
        <FeaturedProperties/>
        <Partner />
        <Promotion />
        <Propose />
        <Advantage />
        <Explore />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
