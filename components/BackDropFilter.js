import {
  BackdropFilter,
  Blur,
  Canvas,
  Circle,
  DisplacementMap,
  Fill,
  Group,
  LinearGradient,
  mix,
  Paint,
  Turbulence,
  useDerivedValue,
  useLoop,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, Easing} from 'react-native';

const {width, height} = Dimensions.get('window');
const c = vec(width / 2, height / 2);
const r = 140;
const rect = {x: 0, y: height / 2, width, height: height / 2};

export const BackDropFilter = () => {
  const progress = useLoop({duration: 4000});
  const cy = useDerivedValue(p => mix(p, c.y + 70, c.y - 140), [progress]);
  return (
    <Canvas style={{flex: 1}}>
      <Fill color="#87ceeb" />
      <Group>
        <Paint>
          <LinearGradient
            start={{x: c.x, y: c.y - 140}}
            end={{x: c.x, y: c.y + 70}}
            colors={['orange', 'red']}
          />
          <DisplacementMap channelX="r" channelY="a" scale={60}>
            <Turbulence freqX={0.01} freqY={0.05} octaves={8} />
          </DisplacementMap>
        </Paint>
        <Circle cx={c.x} cy={cy} r={r} />
      </Group>
      <BackdropFilter
        filter={<Blur sigmaX={-4} sigmaY={60} />}
        clip={rect}
        blendMode={'difference'}>
        <Fill color="#00757788" />
      </BackdropFilter>
    </Canvas>
  );
};
