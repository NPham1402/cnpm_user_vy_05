import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

class Specialrequest extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      value: new Date(),
      checked_out: false,
      value_out: new Date(),
      smoking: true,
      connectionroom: false,
      highfloor: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_checkout = this.handleChange_checkout.bind(this);
    this.handleChange_smoking = this.handleChange_smoking.bind(this);
    this.handleChange_connectionroom =
      this.handleChange_connectionroom.bind(this);
    this.highfloorchange = this.highfloorchange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  handleChange_checkout() {
    this.setState({
      checked_out: !this.state.checked_out,
    });
  }
  handleChange_smoking() {
    this.setState({
      smoking: !this.state.smoking,
    });
  }
  handleChange_connectionroom() {
    this.setState({
      connectionroom: !this.connectionroom,
    });
  }
  highfloorchange() {
    this.setState({
      highfloor: !this.highfloor,
    });
  }
  render() {
    const content_out = this.state.checked ? (
      <div>
        <input
          className="form-control"
          value={
            this.state.value_out.getHours() +
            ":" +
            this.state.value_out.getMinutes()
          }
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={this.state.value_out}
            onChange={(newValue) => {
              console.log(newValue);
              this.setState({ value_out: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>{" "}
      </div>
    ) : null;
    const content = this.state.checked ? (
      <div>
        <input
          className="form-control"
          value={
            this.state.value.getHours() + ":" + this.state.value.getMinutes()
          }
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={this.state.value}
            onChange={(newValue) => {
              console.log(newValue);
              this.setState({ value: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>{" "}
      </div>
    ) : null;
    return (
      <div>
        <br/>
        <label className="title-booking">Yêu cầu đặc biệt</label>
        <div class="container input-infor">
          <p>
          Có một yêu cầu đặc biệt? Hãy hỏi và chỗ nghỉ sẽ cố gắng hết sức để
             đáp ứng mong muốn của bạn. (Lưu ý rằng yêu cầu đặc biệt không được đảm bảo và
             có thể phải trả phí)
          </p>
          <div class="row">
            <div class="col">
              <div className="form-check form-control-lg">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.smoking}
                  onChange={this.handleChange_smoking}
                />
                <label class="form-check-label">Phòng cấm hút thuốc</label>
              </div>
              <div className="form-check form-control-lg">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
                <label class="form-check-label">Thời gian check-in</label>
              </div>
              {content}
            </div>
            <div class="col">
              <div className="form-check form-control-lg">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.connectionroom}
                  onChange={this.handleChange_connectionroom}
                />
                <label class="form-check-label">các phòng thông nhau</label>
              </div>
              <div className="form-check form-control-lg">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
                <label class="form-check-label">Nhận phòng Trả phòng</label>
              </div>
              {content_out}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Specialrequest;
