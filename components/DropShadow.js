import {
  Canvas,
  DropShadow,
  Group,
  Paint,
  RoundedRect,
  Text,
  useFont,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

const data = [
  {
    id: 1,
    name: 'John Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
  {
    id: 2,
    name: 'Jane Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
  {
    id: 3,
    name: 'Erin Yeager',
    body: 'Adipisicing sint ullamco irure nulla',
  },
  {
    id: 4,
    name: 'Mikasa Ackerman',
    body: 'Adipisicing sint ullamco irure nulla',
  },
  {
    id: 5,
    name: 'John Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
  {
    id: 6,
    name: 'Jane Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
  {
    id: 7,
    name: 'John Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
  {
    id: 8,
    name: 'Jane Doe',
    body: 'Sunt aliqua eu officia eiusmod non',
  },
];

const {width} = Dimensions.get('window');

const NeumorphicCard = ({data, index, font, bodyFont}) => {
  return (
    <Canvas style={{height: 140, width}} key={index}>
      <Group>
        <Paint>
          <DropShadow dx={6} dy={6} blur={4} color="rgba(0, 0, 0, 0.4)" />
          <DropShadow dx={-6} dy={-6} blur={4} color="rgba(255, 255, 255, 1)" />
        </Paint>
        <RoundedRect
          x={16}
          y={20}
          width={width - 32}
          height={100}
          rx={12}
          color="#EFEEEE">
          <Paint
            color="rgba(255, 255, 255, 0.6)"
            style="stroke"
            strokeWidth={1}
          />
        </RoundedRect>
      </Group>
      <Text x={32} y={56} text={data?.name} font={font} />
      <Text x={32} y={92} text={data?.body} font={bodyFont} />
    </Canvas>
  );
};

export const Neumorphism = () => {
  const font = useFont(require('../fonts/Poppins-Regular.ttf'), 20);
  const bodyFont = useFont(require('../fonts/Poppins-Regular.ttf'), 14);
  if (font === null || bodyFont === null) {
    return null;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#EFEEEE'}}
      contentContainerStyle={{
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
        paddingBottom: 40,
      }}>
      {data.map(item => (
        <NeumorphicCard
          key={item.id}
          data={item}
          font={font}
          bodyFont={bodyFont}
        />
      ))}
    </ScrollView>
  );
};
