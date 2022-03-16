import {
  AnimationValues,
  BackDropFilter,
  DeclarativeAPI,
  Neumorphism,
  Glassmorphism,
  ImageFilters,
  ImperativeAPI,
  TouchEvents,
} from './components';
import React from 'react';

export const SCREENS = [
  {
    id: 0,
    name: 'Declarative API',
    component: <DeclarativeAPI />,
  },
  {
    id: 1,
    name: 'Imperative API',
    component: <ImperativeAPI />,
  },
  {
    id: 2,
    name: 'AnimationValues',
    component: <AnimationValues />,
  },
  {
    id: 3,
    name: 'TouchEvents',
    component: <TouchEvents />,
  },
  {
    id: 4,
    name: 'BackDropFilter',
    component: <BackDropFilter />,
  },
  {
    id: 5,
    name: 'Neumorphism',
    component: <Neumorphism />,
  },
  {
    id: 6,
    name: 'Glassmorphism',
    component: <Glassmorphism />,
  },
  {
    id: 7,
    name: 'Image Filters',
    component: <ImageFilters />,
  },
];

export const data = [
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
