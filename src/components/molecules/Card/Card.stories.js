import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Card from './Card';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Card material UI', () => (
   <Card
    image={require("../../../../assets/react-logo.png")}
    title="React native"
    subtitle='Course'
    cardDescription='How to build cross-platform applications using react native.'
    moreinfo="React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform."
   />
  ))
