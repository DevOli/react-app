import React from "react";
import { View, StyleSheet } from "react-native";
import Checkbox from "../atoms/checkboxs/Checkbox";
import Label from "../atoms/labels/Label";

type Props = {
  text: string,
  size: number,
  color: string
}

const LabeledCheckbox = (props: Props) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox size={props.size} color={props.color}/>
      <Label textStyle={[styles.checkboxLabel, {fontSize: props.size, color: props.color}]} text={props.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 8,
  },
});

export default LabeledCheckbox