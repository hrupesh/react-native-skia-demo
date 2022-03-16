import {
  Canvas,
  Circle,
  mix,
  runSpring,
  useDerivedValue,
  useLoop,
  useTouchHandler,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const center = vec(width / 2, height / 2);

export const TouchEvents = () => {
  const cx = useValue(center.x);
  const cy = useValue(center.y);

  const touchHandler = useTouchHandler({
    onActive: ({x, y}) => {
      cx.current = x;
      cy.current = y;
    },
    onEnd: ({x, y}) => {
      runSpring(cx, center.x);
      runSpring(cy, center.y);
    },
  });

  return (
    <Canvas style={{flex: 1}} onTouch={touchHandler}>
      <Circle cx={cx} cy={cy} r={40} color="#eaf" />
    </Canvas>
  );
};
