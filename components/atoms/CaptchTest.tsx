import React, { Component } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

interface CaptchaTestState {
  userCaptchaInput: string;
}

class CaptchaTest extends Component<{}, CaptchaTestState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userCaptchaInput: "",
    };
  }

  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userCaptchaInput: event.target.value });
  };

  doSubmit = () => {
    const { userCaptchaInput } = this.state;

    if (validateCaptcha(userCaptchaInput)) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      this.setState({ userCaptchaInput: "" });
    } else {
      alert("Captcha Does Not Match");
      this.setState({ userCaptchaInput: "" });
    }
  };

  render() {
    return (
      <div>
        <div className="mt-3 border">
          <LoadCanvasTemplate />
        </div>

        <div className="mt-3">
          <div>
            <input
              placeholder="Enter Captcha"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
              value={this.state.userCaptchaInput}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="col mt-3">
          <div>
            <button className="btn btn-primary" onClick={this.doSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaTest;
