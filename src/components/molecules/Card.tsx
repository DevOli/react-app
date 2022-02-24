import { View, Image, StyleSheet, Text, Button, Alert, Platform } from 'react-native'
import React from 'react'
import Label from '../atoms/labels/Label'
import ImageAtom from '../atoms/images/ImageAtom'

export default function Card(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageAtom image={require("../../../assets/react-logo.png")} />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.title}>
          <Label textStyle={{fontSize: 24, color: "black", fontWeight: "bold"}} text="Hello world"/>
          <Label textStyle={{fontSize: 20, color: "black"}} text="Secondary text"/>
        </View>
        <View style={styles.description}>
          <Label textStyle={{fontSize: 20, color: "black"}} text="Greyhound divisively hello coldly wonderfully marginally far upon excluding."/>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Press me"
            onPress={() => {}}
          />
          <Button
            title="Press me"
            onPress={() => {}}
          />
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
    height: 200,
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
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});