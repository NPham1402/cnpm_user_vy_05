import React from "react";
import { Link } from "react-router-dom";
import "./FooterCustomer.css";
const FooterHomepage = () => {
    return (
        <div className="footer-homepage-customer">
            <div className="container-customize-footer">
                <div className="col-lg-5-customize-footer">
                    <div className="big-img-footer">
                        <img srcSet="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg"  />
                    </div>
                    <div className="cover-iee">
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" />
                    </div>
                    <Link to="/Partner">
                        <button className="button-partner">
                            <img srcSet="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg"></img>
                            <p style={{ color: "white" }}>Liên Hệ Với Chúng Tôi</p>
                        </button>
                    </Link>
                    <h3 style={{ marginLeft: 10 + "%", color: "white" }}>Đối tác thanh toán</h3>
                    <div style={{ marginLeft: 3 + "%" }}>
                        <img src={require("./footer_img_1.PNG")}></img>
                    </div>

                </div>
                <div className="col-lg-2-customize-footer">
                    <div className="about-traveloka">
                        <h5>Về Traveloka</h5>
                        <ul>
                            <li style={{ marginTop: 30 + "px" }}>
                                Cách đặt chỗ
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Liên hệ chúng tôi
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Trợ giúp
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tuyển dụng
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Về chúng tôi
                            </li>
                        </ul>
                    </div>
                    <div className="about-us">
                        <h5>Theo dõi chúng tôi trên</h5>
                        <ul>
                            <li style={{ marginTop: 30 + "px" }}>
                                Cách đặt chỗ
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Liên hệ chúng tôi
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Trợ giúp
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tuyển dụng
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3-customize-footer">
                    <h5>Sản phẩm</h5>
                    <ul>
                        <li style={{ marginTop: 30 + "px" }}>
                            Vé máy bay
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Khách sạn
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Combo tiết kiệm
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Xperience
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Thuê xe
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Biệt thự và căn hộ
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Đưa đón sân bay
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2-customize-footer margin-top-some">
                    <h5>Khác</h5>
                    <ul>
                        <li style={{ marginTop: 30 + "px" }}>
                            Traveloka Affiliate
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Traveloka Blog
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Chính sách quyền riêng tư
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Điều khoản & Điều kiện
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Quy chế hoạt động
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Đăng ký nơi nghỉ của bạn
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Đăng ký doanh nghiệp hoạt động du lịch của bạn
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Khu vực báo chí
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="drawing-line" />
            <div className="company-name-line">
                <p style={{ color: "white" }}>Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng, P. 7, Q. 3, TPHCM</p>
                <p style={{ color: "white", textAlign: "center", fontSize: 20 + "px", fontWeight: "bold" }}>Copyright © 2022 Traveloka</p>
            </div>
        </div>
    )
}
export default FooterHomepage;