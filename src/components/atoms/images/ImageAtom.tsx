import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

type ImageProps = {
  image: number,
  imageDescription: string,
  imageStyle: object
}

export default function ImageAtom(props: ImageProps) {
  return (
    <View>
      <Image source={props.image} style={[styles.imageAtom, props.imageStyle]} accessibilityLabel={props.imageDescription}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imageAtom: {
      height: 200,
      width: "100%",
      resizeMode: 'cover',
    }
  });