import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

type Props = {
    text: string,
    textStyle: object
}

export default function Label(props: Props) {
    return <Text style={[styles.simpleText, props.textStyle]}>{props.text}</Text>
}

const styles = StyleSheet.create({
    simpleText: {
        margin: 6
    },
});

