import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../../storybook/stories/CenterView';
import Label from './Label';


const LabelStories = storiesOf('Label', module);

LabelStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('short', () => {
    const styles = {
      fontSize: number('Font Size', 24),
      color: color('Color', 'black')
    }

    return (
      <Label text={text('Text', 'This is a short text')} textStyle={styles} />
    )
  })
  .add('long', () => {
    const styles = {
      fontSize: number('Size', 24),
      color: color('Color', 'black')
    }

    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(5);

    return (
      <Label text={text('Text', longText)} textStyle={styles} />
    )
  });

