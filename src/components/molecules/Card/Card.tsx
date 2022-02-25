import { View, Image, StyleSheet, Text, Alert, Platform, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import Label from '../../atoms/labels/Label'
import ImageAtom from '../../atoms/images/ImageAtom'
import {Button} from '../../molecules/Button'
import { RootSiblingParent } from 'react-native-root-siblings'
import Toast from 'react-native-root-toast'

type CardProps = {
  image: number,
  title: string,
  subtitle: string,
  cardDescription: string,
  moreinfo: string,
  cardStyles?: object,
  accesibilities?: object
}

export default function Card(props: CardProps) {

  const {image, title, subtitle, cardDescription, moreinfo, cardStyles} = props
  const [description, setDescription] = useState(cardDescription)

  const accesibilities = {
    accessible: true,
    accessibilityLabel: title + " " + subtitle,
    accessibilityHint: "Card"
  }
  const cardImage = {
    image: image,
    imageDescription: "React image",
    imageStyle: {
      height: 220, 
      borderTopLeftRadius: 8, 
      borderTopRightRadius: 8 
    }
  }
  const titleStyles = {
    fontSize: 20, 
    color: "black", 
    fontWeight: "bold", 
    margin: 0
  }
  const subtitleDescStyles = {
    fontSize: 16, 
    color: "black", 
    margin: 0
  }
  const btnMoreInfo = {
    text: 'More info',
    width: 140,
    height: 40,
    onPress: () => {setDescription(moreinfo)}
  }
  const btnAdd = {
    text: 'Add',
    width: 80,
    height: 40,
    onPress: () => {
      if(Platform.OS === 'ios'){
        Toast.show("Course added!")
      } else {
        ToastAndroid.show('Course added!', ToastAndroid.SHORT)
      }
    },
  }

  return (
    <View style={[styles.container, cardStyles]} {...accesibilities}>
      <View style={styles.image}>
        <ImageAtom {...cardImage}/>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.title}>
          <Label textStyle={titleStyles} text={title}/>
          <Label textStyle={subtitleDescStyles} text={subtitle}/>
        </View>
        <View style={styles.description}>
          <Label textStyle={subtitleDescStyles} text={description}/>
        </View>
        <View style={styles.buttons}>
          <Button {...btnMoreInfo}/>
          <RootSiblingParent>
            <Button {...btnAdd}/>
          </RootSiblingParent>
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