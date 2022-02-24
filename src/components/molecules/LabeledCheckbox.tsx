import React from "react";
import { View, StyleSheet } from "react-native";
import Checkbox from "../atoms/checkboxs/Checkbox";
import Label from "../atoms/labels/Label";

type Props = {
  text: string,
  size: number,
  color: string,
  disabled?: boolean,
  checked: boolean,
  onChange: () => void,
}

const LabeledCheckbox = (props: Props) => {
  const {text, size, color, disabled, checked, onChange} = props;
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox disabled={disabled} size={size} color={color} checked={checked} onChange={onChange}/>
      <Label textStyle={[styles.checkboxLabel, {fontSize: size, color: disabled ? 'darkgrey': color}]} text={text}/>
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