import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Card from './Card';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Card material UI', () => (
   <Card/>
  ))
