import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../../storybook/stories/CenterView';
import Icon from './Icon';

const IconStories = storiesOf('Icon', module);

IconStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => {
    return (
      <Icon icon={text('Ionicons icon', 'heart')} />
    )
  })
  .add('error', () => {
    return (
      <Icon icon='md-alert-circle' />
    )
  });

