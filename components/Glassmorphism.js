import {
  BackdropBlur, Canvas, Fill, Group, Image, mix,
  Paint, rect, Rect, RoundedRect, rrect, Text,
  useDerivedValue, useFont, useImage, useLoop, vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {useWindowDimensions} from 'react-native';

export const Glassmorphism = () => {
  const {width, height} = useWindowDimensions();
  const center = vec(width / 2 - 50, height / 2 - 100);
  const blurClipPath = rrect(rect(24, center.y, width - 48, 200), 12, 12);
  const image = useImage('https://picsum.photos/1920/1080');
  const blurProgress = useLoop({duration: 2000});
  const blur = useDerivedValue(
    progress => mix(progress, 0, 10),
    [blurProgress],
  );
  const font = useFont(require('../fonts/Poppins-Regular.ttf'), 40);
  if (font === null) {
    return null;
  }
  return (
    <Canvas style={{flex: 1}}>
      <Group>
        <Rect x={0} y={0} width={width} height={height} />
        <Image
          x={0}
          y={0}
          width={width}
          height={height}
          image={image}
          fit={'cover'}
        />
      </Group>
      <Group>
        <RoundedRect
          x={24}
          y={center.y}
          width={width - 48}
          height={200}
          color="#0000"
          rx={12}>
          <Paint
            color="rgba(255, 255, 255, 0.8)"
            style="stroke"
            strokeWidth={1}
          />
        </RoundedRect>
        <BackdropBlur blur={blur} clip={blurClipPath}>
          <Fill color={'rgba(122, 122, 122, 0.2)'} />
        </BackdropBlur>
        <Text
          x={center.x - 50}
          y={center.y + 110}
          text="Hello Skia"
          font={font}
          color="#fff"
          style="stroke"
        />
      </Group>
    </Canvas>
  );
};
