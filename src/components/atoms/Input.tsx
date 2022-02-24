import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC } from 'react';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  return (
    <View>
      <TextInput
        textAlign='left'
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={(text) => props.onChangeText(text)} >
      </TextInput>
    </View>
  )
};

export default Input;

const styles = StyleSheet.create({
  input: {
    outlineStyle: 'none'
  }
});