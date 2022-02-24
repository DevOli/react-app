import React from 'react'
import { Pressable, StyleSheet, Platform } from 'react-native'
import Label from '../atoms/labels/Label';

type Props = {
  name: string,
  text: string,
  width: number,
  height: number,
  fontSize: number,
  color: string
}

export const Button = (props: Props) => {

  const { name, text, width, height, fontSize, color } = props

  function onButtonPress() {
    console.warn(`Hi ${name}, you are approved!`);
  }

  return (
    <Pressable style={[styles.container, { borderColor: color, width: width, height: height }]} onPress={onButtonPress}>
      <Label text={text} textStyle={[styles.label, { fontSize: fontSize, color: color }]} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        elevation: 20,
        shadowColor: '#52006A',
      },
      ios: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    })
  },
  label: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});