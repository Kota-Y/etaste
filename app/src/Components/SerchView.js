import React from "react";
import "../CSS/SerchView.css";
import Select from "react-select";

const areas = [
  { values: "新市街", label: "新市街" },
  { values: "下通", label: "下通" },
  { values: "上通", label: "上通" }
];

const times = [
  { values: "12:00", label: "12:00" },
  { values: "13:00", label: "13:00" },
  { values: "14:00", label: "14:00" },
  { values: "15:00", label: "15:00" },
  { values: "16:00", label: "16:00" }
];

const styleKeys = [{ key: "indicatorsContainer" }];

const styleFn = base => ({ ...base, border: "5px solid #bac6d" });

class SerchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beSerched: false,
      areas: "",
      hasAreasError: false,
      times: "",
      hasTimesError: false
    };
  }

  render() {
    return (
      <div className="view">
        <div className="box-view">
          <h1>フードを探してみよう</h1>

          <div className="key-word">
            <h3> キーワード </h3>
            <input />
          </div>

          <div className="select-box">
            <h3>エリア</h3>
            <Select
              options={areas}
              styles={{
                [styleKeys]: styleFn
              }}
            />
          </div>

          <div className="select-box">
            <h3>受け取り時間</h3>
            <Select
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
            />
          </div>

          <input type="submit" value="検索" />
        </div>
      </div>
    );
  }
}

export default SerchView;
