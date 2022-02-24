import { View, Image, StyleSheet, Text, Alert, Platform } from 'react-native'
import React from 'react'
import Label from '../../atoms/labels/Label'
import ImageAtom from '../../atoms/images/ImageAtom'
import {Button} from '../../molecules/Button'

export default function Card(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageAtom image={require("../../../../assets/react-logo.png")} imageStyle={{ height: 220, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}/>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.title}>
          <Label textStyle={{fontSize: 20, color: "black", fontWeight: "bold", margin: 0}} text="Hello world"/>
          <Label textStyle={{fontSize: 16, color: "black", margin: 0}} text="Secondary text"/>
        </View>
        <View style={styles.description}>
          <Label textStyle={{fontSize: 16, color: "black", margin: 0}} text="Greyhound divisively hello coldly wonderfully marginally far upon excluding."/>
        </View>
        <View style={styles.buttons}>
          <Button text='ACTION 1' width={120} height={40} />
          <Button text='ACTION 2' width={120} height={40} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  ...Platform.select({
    ios: {
      container: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 8,
      },
    },
    android: {
      container: {
        elevation: 2,
        shadowRadius: 20,
        shadowColor: 'black',
        borderRadius: 8,
      },
    }
  }),
  image: {
    height: 220,
  },
  cardBody: {
    backgroundColor: "#fff",
    borderColor: "#A9A9A9",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  description: {
      paddingVertical: 4,
    paddingHorizontal: 20,
  },
  buttons: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});