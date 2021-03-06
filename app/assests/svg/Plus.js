import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const PlusIcon = memo(props => {
  return (
    <Svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.17969 4.85938H5.02344V8.00781H3.98438V4.85938H0.835938V3.8125H3.98438V0.664062H5.02344V3.8125H8.17969V4.85938Z"
        fill="#565656"
      />
    </Svg>
  );
});
