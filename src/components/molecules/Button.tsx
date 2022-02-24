import React from 'react'
import { TouchableHighlight, StyleSheet, Platform } from 'react-native'
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
    <TouchableHighlight style={[styles.container, { borderColor: color, width: width, height: height }]} onPress={onButtonPress}>
      <Label text={text.toUpperCase()} textStyle={[styles.label, { fontSize: fontSize, color: color }]} />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: '#F3F4F7',
    margin: 10,
    paddingStart: 16,
    paddingEnd: 16,
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
    fontWeight: '500'
  },
});