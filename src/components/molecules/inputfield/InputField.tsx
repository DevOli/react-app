import { StyleSheet, Text, TextStyle, TouchableOpacityBase, View, ViewStyle } from 'react-native'
import React, { FC, useState } from 'react'
import Icon from '../../atoms/icon/Icon'
import Input from '../../atoms/input/Input'

type InputFieldType = 'empty' | 'normal' | 'focused' | 'error';

type Props = {
  showLeftIcon: boolean;
  showRightIcon: boolean;
  showHelper: boolean;
  showError: boolean;
  showCounter: boolean;
  label: string;
  helper: string;
  error: string;
  limit: number;
  type: InputFieldType;
}

const InputField = (props: Props) => {
  const [type, setType] = useState(props.type)
  const [placeholder, setPlaceholder] = useState(props.label)
  const styles = inputFieldStyles(type);

  const [counter, setCounter] = useState(0);
  const onChangeText = (text: string) => {
    let length = text.length;
    if (length <= 0) {
      length = 0;
    }
    if (length > props.limit) {
      length = props.limit;
    }
    setCounter(length);
  }
  const onFocus = () => {
    setPlaceholder("");
    if (props.showError) {
      return
    }
    setType('focused');
  }
  const onBlur = () => {
    if (counter<=0) setPlaceholder(props.label)
    if (props.showError) {
      return
    }
    if (counter>0) setType('normal');
    else setType('empty');
  }

  return (
    <View style={{width: '80%', height: 88}}>
      {(type==='normal' || type==='focused' || (type==='error' && counter>0)) && <Text style={styles.label}>{props.label}</Text>}

      <View style={styles.container}>

        <View style={{ flexDirection: 'row' }}>
          {props.showLeftIcon && <Icon icon='heart' />}
          <Input 
            placeholder={placeholder} onError={type==='error'? true:false} 
            limit={props.showCounter? props.limit: undefined} 
            onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur} />
          {props.showRightIcon && <Icon icon={type==='error' ? 'md-alert-circle' : 'eye'} />}
        </View>

      </View>

      <View style={styles.container_bottom} >
        {props.showHelper && !props.showError && <Text>{props.helper}</Text>}
        {!props.showHelper && props.showError && <Text style={styles.error}>{props.error}</Text>}
        {props.showCounter && <Text style={styles.counter}>{counter} / {props.limit}</Text>}
      </View>

    </View>
  )
}

export default InputField

const inputFieldStyles = (type: InputFieldType) => {
  let containerFormat: ViewStyle = {};
  let labelFormat: TextStyle = {};

  if (type === 'focused') {
    containerFormat = {
      borderColor: 'blue'
    }
    labelFormat = {
      color: 'blue'
    }
  } else if (type === 'error') {
    containerFormat = {
      borderColor: 'red',
      borderWidth: 2
    }
    labelFormat = {
      color: 'red'
    }
  }

  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'gray',
      padding: 16,
      paddingEnd: 12,
      ...containerFormat
    },
    label: {
      position: 'absolute',
      top: -16,
      left: 16,
      padding: 4,
      color: 'gray',
      backgroundColor: 'white',
      ...labelFormat
    },
    container_bottom: {
      flexDirection: 'row',
      flex: 1,
      paddingStart: 16,
      paddingEnd: 12,
      marginTop: 8
    },
    error: {
      color: 'red',
    },
    counter: {
      flex: 1,
      textAlign: 'right',
    }
  })
}