import ReactDOM from "react-dom";
import { Component } from "react";
import "./movieTooltip.scss";

class Tooltip extends Component {
  render() {
    const { open, position, children } = this.props;

    if (!open) return null;
    return ReactDOM.createPortal(
      <div className="tooltip" style={{
          position: "absolute",
          top: position?.top || 0,
          left: position?.left || 0,
          zIndex: 9999
        }}>
        <div className="tooltip__container">{children}</div>
      </div>,
      document.body
    );
  }
}

export default Tooltip;
