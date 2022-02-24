import React from 'react'
import { Pressable, StyleSheet, Platform } from 'react-native'
import Label from '../../atoms/labels/Label';

type Props = {
  text: string,
  width: number,
  height: number,
  fontSize: number,
  color: string
}

export const Button = (props: Props) => {

  const { text, width, height, fontSize, color } = props

  return (
    <Pressable style={[styles.container, { borderColor: color, width: width, height: height }]}>
      <Label text={text} textStyle={[styles.label, { fontSize: fontSize, color: color }]} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    backgroundColor: 'transparent',
    ...Platform.select
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});