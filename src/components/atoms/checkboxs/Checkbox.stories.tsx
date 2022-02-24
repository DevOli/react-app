import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number } from '@storybook/addon-knobs';

import CenterView from '../../../../storybook/stories/CenterView';
import Checkbox from './Checkbox';
import { action } from '@storybook/addon-actions';

const checkboxStories = storiesOf('Checkbox', module);

checkboxStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => React.createElement(() => {
    const [checked, onChange] = useState(false);

    return (
      <Checkbox
        size={number('Size', 24)}
        color={color('Color', 'black')}
        checked={checked}
        onChange={() => onChange(!checked)} />
    )
  }))
  .add('disabled', () => React.createElement(() => {
    const [checked, onChange] = useState(false);

    return (
      <Checkbox
        disabled={true}
        size={number('Size', 24)}
        color={color('Color', 'black')}
        checked={checked}
        onChange={action('Checkbox Press but is disabled!')} />
    )
  }));