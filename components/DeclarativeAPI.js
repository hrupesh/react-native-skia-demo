import { Canvas, Fill, RoundedRect, vec } from '@shopify/react-native-skia';
import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

export const DeclarativeAPI = () => {
  const {width, height} = useWindowDimensions();
  const center = vec(width / 2, height / 2);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Canvas style={{flex: 1}}>
        <Fill color={'#222'} />
        <RoundedRect 
          height={180}
          width={300}
          x={center.x - 150}
          y={center.y - 90}
          color={'#eee'}
          rx={12}
        />
      </Canvas>
    </>
  );
};
