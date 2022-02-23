import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types'

type Props = {
    text: string,
    textStyle: object
}

export default function Label(props: Props) {
    return <Text style={props.textStyle}>{props.text}</Text>
}

Label.propTypes = {
    text: PropTypes.string.isRequired
}