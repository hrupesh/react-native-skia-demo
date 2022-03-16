import {Canvas, Circle, runSpring, useValue} from '@shopify/react-native-skia';
import React from 'react';
import {Button, useWindowDimensions} from 'react-native';

export const AnimationValues = () => {
  const {height, width} = useWindowDimensions();
  const cX = useValue(width / 2);
  const cY = useValue(height / 2 - 100);
  const changePosition = () => {
    runSpring(cX, Math.random() * width);
    runSpring(cY, Math.random() * height);
  };
  return (
    <>
      <Canvas style={{flex: 1}}>
        <Circle r={60} cx={cX} cy={cY} color={'#ff5522'} />
      </Canvas>
      <Button title="Toggle" onPress={changePosition} />
    </>
  );
};
