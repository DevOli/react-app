import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../../storybook/stories/CenterView';
import Input from './Input';

const InputStories = storiesOf('Input', module);

InputStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => {
    return (
      <Input 
            placeholder={text('placeholder', 'Placeholder text')} onError={boolean('error', false)} 
            limit={number('Max Length', 10)}
            onChangeText={(text)=>{}} onFocus={()=>{}} onBlur={()=>{}} />
    )
  });
