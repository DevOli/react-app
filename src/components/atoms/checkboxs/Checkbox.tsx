import React, { useState } from 'react';
import { Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

type Style = {
  size: number,
  color: string
}

export default function Checkbox({size, color}: Style) {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  const customStyles = {
    width: size,
    height: size,
    borderColor: color
  }

  return (
    <Pressable
      style={[styles.checkboxBase, customStyles, checked && {backgroundColor: color}]}
      onPress={onCheckmarkPress}>
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
