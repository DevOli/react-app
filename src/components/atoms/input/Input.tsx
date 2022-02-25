import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC } from 'react';

type Props = {
  placeholder: string;
  onError: boolean;
  limit?: number;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const Input = (props: Props) => {
  return (
    <View>
      <TextInput
        placeholderTextColor={props.onError? 'red' : 'gray'}
        maxLength={props.limit}
        textAlign='left'
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={(text) => props.onChangeText(text)}
        onFocus={() => {props.onFocus()}}
        onBlur={() => props.onBlur()} >
      </TextInput>
    </View>
  )
};

export default Input;

const styles = StyleSheet.create({
  input: {
    //outlineStyle: 'none'
  }
});