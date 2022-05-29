import React, { Component } from 'react';
import "./Explore.css"

class Explore extends Component {
    render() {
        return (
            <div class="accordion" id="accordionExample">
                <h4 class="title-explore">Đặt biệt thự đẹp siêu dễ dàng trên Traveloka ở tất cả các điểm đến hấp dẫn</h4>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Trải nghiệm biệt thự siêu đẳng cấp cho chuyến du lịch mới cùng Traveloka
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Này anh bạn! Đã đến lúc gia đình cần một kỳ nghỉ ngắn ngày để gắn kết, các cặp đôi cần một chuyến du lịch lãng mạn để hâm nóng tình cảm sau những ngày làm việc mệt mỏi. Những người bạn thân của chúng ta cũng cần một chuyến đi để trải nghiệm những năm tháng thanh xuân. Tận hưởng chuyến đi là việc của bạn, và việc đặt một biệt thự sang trọng để cả nhóm thoải mái tận hưởng đã được Traveloka lo!
                        
                          Từ tháng 7/2019, Traveloka ra mắt dịch vụ đặt biệt thự trên ứng dụng du lịch “3 trong 1” giúp bạn thoải mái lựa chọn nhiều loại hình lưu trú cho chuyến đi của mình. Bạn có thể dễ dàng đặt biệt thự trên trang web chính của Traveloka hoặc ứng dụng Traveloka (phiên bản 3.6 trở lên).
                        </div>
                    </div>    
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Chỉ với 1 cú chạm - đến ngay biệt thự mà bạn hằng mơ ước
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Với danh sách hàng nghìn biệt thự tuyệt vời, từ thiết kế ấn tượng, đầy đủ tiện nghi đến các vị trí đắc địa thuận tiện trong và ngoài nước, đặt biệt thự trên Traveloka, từ các địa điểm du lịch HOT nhất đến các thành phố trong nước, cực kỳ nhanh chóng, tiện lợi và an toàn.
                        
                         Để chọn được biệt thự phù hợp, bạn chỉ cần tích vào yêu cầu trong phần lọc tính năng, chỉ trong tích tắc, hàng nghìn mẫu biệt thự đẹp phù hợp hiện ra trên cùng một giao diện vô cùng thân thiện giúp bạn dễ dàng so sánh. . Bạn chỉ cần xem hình ảnh, thông tin chi tiết, điều khoản sử dụng của căn phòng và những đánh giá chân thực từ những khách hàng đã trải nghiệm và sau đó đặt ngay căn biệt thự “mê hoặc” bạn nhất. Chưa hết, chưa hết, nếu bạn có yêu cầu gì đặc biệt, chỉ cần ghi vào note, Traveloka sẽ gửi trực tiếp cho host.
                        </div>
                    </div>    
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Thanh toán dễ dàng - an tâm
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Với Traveloka, bạn có thể đặt villa theo ý mình mà không lo về giá. Không có phí ẩn, giá cuối cùng là giá tốt nhất và các ưu đãi thường xuyên cũng giúp bạn đặt biệt thự với giá cạnh tranh nhất. Ngoài ra, việc thanh toán tại Traveloka cũng vô cùng đơn giản với 5 hình thức đa dạng: thẻ thanh toán quốc tế, ATM nội địa, chuyển khoản, thanh toán tại bưu điện và hệ thống cửa hàng liên kết với Payoo. Để tránh rủi ro khi giao dịch trực tuyến, thông tin thẻ của khách hàng được mã hóa và quản lý bởi một trong những nhà cung cấp dịch vụ quản lý giao dịch thanh toán trực tuyến lớn nhất thế giới thuộc tổ chức thẻ VISA - CyberSource.
                        
                         Điều kiện cần để có một chuyến đi thú vị là tinh thần, điều kiện đủ là bạn phải tìm được nơi lưu trú để có không gian thư giãn cùng nhau. Vậy thì còn chần chừ gì mà không đặt ngay một villa cho chuyến du lịch nghỉ dưỡng của mình trên Traveloka ngay thôi!
                        </div>
                    </div>    
                </div>
            </div>
        )
            
    }
}

export default Explore;