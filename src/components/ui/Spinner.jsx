import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { BeatLoader } from 'react-spinners';

function Spinner(props) {
  const { color, loading, size, styles } = props;
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };
  return (
    <div className={`sweet-loading ${styles}`}>
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
