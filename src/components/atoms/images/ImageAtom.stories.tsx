import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import ImageAtom from './ImageAtom';

storiesOf('Image', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Image', () => (
   <ImageAtom image={require("../../../../assets/react-logo.png")} imageStyle={{ width: 200 }}/>
  ))
