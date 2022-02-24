import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

type ImageProps = {
  image: number
}

export default function ImageAtom(props: ImageProps) {
  return (
    <View>
      <Image source={props.image} style={styles.imageAtom}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imageAtom: {
      height: 200,
      width: "100%",
      resizeMode: 'cover',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
  });