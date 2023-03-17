import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#176b16"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
