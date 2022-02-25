import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../../storybook/stories/CenterView';
import InputField from './InputField';

const InputFieldStories = storiesOf('InputField', module);

InputFieldStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => React.createElement(() => {
    const props = {
      showLeftIcon: boolean('Show Left icon', true),
      showRightIcon: boolean('Show Right icon', true),
      showHelper: boolean('Show Helper text', true),
      showError: false,
      showCounter: boolean('Show character count', true),
      label: text('Placeholder/Label', 'Phone Number'),
      helper: text('Helper Message', 'Input your cellphone number'),
      error: 'Not a valid input',
      limit: number('Character Count Limit', 10),
    }
    return (
      <InputField {...props} type='empty' />
    )
  }))
  .add('error', () => React.createElement(() => {
    const props = {
      showLeftIcon: boolean('Show Left icon', true),
      showRightIcon: boolean('Show Right icon', true),
      showHelper: false,
      showError: true,
      showCounter: boolean('Show character count', true),
      label: text('Placeholder/Label', 'Phone Number'),
      helper: 'Input your cellphone number',
      error: text('Error Message', 'Not a valid input'),
      limit: number('Character Count Limit', 10),
    }
    return (
      <InputField {...props} type='error' />
    )
  }));
