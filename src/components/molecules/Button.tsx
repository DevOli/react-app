import React from 'react'
import { Pressable, StyleSheet, Platform } from 'react-native'
import Label from '../atoms/labels/Label';

type Props = {
  name: string,
  result: string,
  text: string,
  width: number,
  height: number,
  fontSize: number,
  color: string,
  //onPress: () => {}
}

export const Button = (props: Props) => {

  const { name, result, text, width, height, fontSize, color } = props

  function onButtonPress() {
    console.warn(`Hi ${name}, you are ${result}.`);
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 3,
    backgroundColor: '#F3F4F7',
    margin: 10,
    ...Platform.select({
      android: {
        elevation: 15,
        shadowColor: '#000000',
      },
      ios: {
        shadowColor: '#071717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }
    })
  },
  label: {
    fontWeight: 'bold'
  },
});