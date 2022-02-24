import { View, Image, StyleSheet, Text, Alert, Platform, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import Label from '../../atoms/labels/Label'
import ImageAtom from '../../atoms/images/ImageAtom'
import {Button} from '../../molecules/Button'

export default function Card(props: any) {

  const [description, setDescription] = useState("How to build cross-platform applications using react native.")
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageAtom image={require("../../../../assets/react-logo.png")} imageStyle={{ height: 220, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}/>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.title}>
          <Label textStyle={{fontSize: 20, color: "black", fontWeight: "bold", margin: 0}} text="React native"/>
          <Label textStyle={{fontSize: 16, color: "black", margin: 0}} text="Course"/>
        </View>
        <View style={styles.description}>
          <Label textStyle={{fontSize: 16, color: "black", margin: 0}} text={description}/>
        </View>
        <View style={styles.buttons}>
          {/* <Button text='More info' width={140} height={40} onPress={() => {ToastAndroid.show('#GoToNextPage', ToastAndroid.SHORT)}}/> */}
          <Button text='More info' width={140} height={40} onPress={() => {setDescription("React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.")}}/>
          <Button text='Add' width={80} height={40} onPress={() => {ToastAndroid.show('Course added!', ToastAndroid.SHORT)}}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
        margin: 5,
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
    width: "100%",
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
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});