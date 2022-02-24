import React, { useState } from 'react';
import { Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

type Props = {
  size: number,
  color: string,
  disabled?: boolean,
  checked: boolean,
  onChange: () => void,
}

export default function Checkbox(props: Props) {
  const {size, color, disabled, onChange, checked} = props;
  //const [checked, onChange] = useState(false);

  // function onCheckmarkPress() {
  //   onChange(!checked);
  // }

  const customStyles = {
    width: size,
    height: size,
    borderColor: disabled ? 'darkgrey': color
  }

  return (
    <Pressable
      disabled={disabled}
      style={[styles.checkboxBase, customStyles, checked && {backgroundColor: color}]}
      onPress={onChange}>
      {checked && <FontAwesome name='check' size={size-5} color='white' />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: 'transparent'
  },
});
