import {
    rect, rrect, Skia,
    SkiaView,
    useDrawCallback, vec
} from '@shopify/react-native-skia';
import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

const paint = Skia.Paint();
paint.setAntiAlias(true);

export const ImperativeAPI = () => {
  const {width, height} = useWindowDimensions();
  const center = vec(width / 2, height / 2);
  const rRect = rrect(rect(center.x - 150, center.y - 90, 300, 180), 12, 12);
  const onDraw = useDrawCallback(canvas => {
    const white = paint.copy();
    white.setColor(Skia.Color('#eee'));
    canvas.drawRRect(rRect, white);
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SkiaView style={{flex: 1, backgroundColor: '#222'}} onDraw={onDraw} />
    </>
  );
};
