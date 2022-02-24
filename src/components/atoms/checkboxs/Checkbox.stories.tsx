import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';

import CenterView from '../../../../storybook/stories/CenterView';
import Checkbox from './Checkbox';

const checkboxStories = storiesOf('Checkbox', module);

checkboxStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Checkbox
      size={number('Size', 24)}
      color={color('Color', 'black')} />
  ));