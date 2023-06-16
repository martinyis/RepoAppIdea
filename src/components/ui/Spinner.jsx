import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner(props) {
  const { color, loading, size } = props;
  return (
    <div className="sweet-loading">
      <BeatLoader
        color={color}
        loading={loading}
        css={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
