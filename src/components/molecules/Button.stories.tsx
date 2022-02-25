import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CenterView from '../../../storybook/stories/CenterView';
import { Button } from './Button';

const ButtonStories = storiesOf('Button', module);

ButtonStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Outlined', () => React.createElement(() => {

        return (
            <Button text={text('Text', 'Button')}
                width={number('width', 130)}
                height={number('height', 45)} />)
    }))
    .add('Outlined with custom color', () => React.createElement(() => {

        const name = 'Anderson'

        const showMessage = (message: string) => {
            console.warn(` Hi, Mr. ${message} welcome to the matrix...`)
        }

        return (
            <Button
                text={text('Text', 'Enter the Matrix')}
                width={number('Width', 200)}
                height={number('Height', 50)}
                fontSize={number('FontSize', 15)}
                color={color('Color', '#1e7311')}
                onPress={() => {
                    showMessage(name)
                }}
            />)
    }))
    .add('Outlined with some emoji and custom color', () => React.createElement(() => {

        const emoji = '😀 😎 👍 💯'

        const showMessage = (message: string) => {
            console.warn(`Button is working fine ${message} !!`)
        }

        return (
            <Button
                text={text('Text', 'Press Me')}
                width={number('Width', 150)}
                height={number('Height', 50)}
                fontSize={number('FontSize', 15)}
                color={color('Color', '#8115cf')}
                onPress={() => {
                    showMessage(emoji)
                }}
            />)
    }));