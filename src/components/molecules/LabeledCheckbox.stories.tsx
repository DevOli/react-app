import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../storybook/stories/CenterView';
import LabeledCheckbox from './LabeledCheckbox';


const LabelStories = storiesOf('Labeled Checkbox', module);

LabelStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => React.createElement(() => {

    const [checked, onChange] = useState(false);

    return (
      <LabeledCheckbox
        text={text('Text', 'Item')} size={number('Size', 24)}
        color={color('Color', 'black')} checked={checked} onChange={function (): void {
          onChange(!checked);
        }} />
    )
  }))
  .add('disabled', () => React.createElement(() => {

    const [checked, onChange] = useState(false);

    return (
      <LabeledCheckbox
        disabled={true}
        text={text('Text', 'Item')} size={number('Size', 24)}
        color={color('Color', 'black')} checked={checked} onChange={function (): void {
          onChange(!checked);
        }} />
    )
  }));