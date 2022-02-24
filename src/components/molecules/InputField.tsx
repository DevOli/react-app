import { StyleSheet, Text, TouchableOpacityBase, View } from 'react-native'
import React, { FC, useState } from 'react'
import Icon from '../atoms/Icon'
import Input from '../atoms/Input'

interface Props {
  showLeftIcon: boolean;
  showRightIcon: boolean;
  showLabel: boolean;
  showHelper: boolean;
  showError: boolean;
  showCounter: boolean;
  label: string;
  helper: string;
  error: string;
  limit: number;
}

const InputField: FC<Props> = (props) => {
  const [counter, setCounter] = useState(0);
  const onChangeText = (text: string) => {
    let length = text.length;
    if (length < 0) {
      length = 0;
    }
    if (length > props.limit) {
      length = props.limit;
    }
    setCounter(length);
  }

  return (
    <View>
      {props.showLabel && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {props.showLeftIcon && <Icon icon='heart' />}
          <Input placeholder={props.label} onChangeText={onChangeText} />
          {props.showRightIcon && <Icon icon={props.showError && !props.showHelper ? 'md-alert-circle' : 'eye'} />}
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

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    paddingEnd: 12,
    flex: 1
  },
  label: {
    position: 'absolute',
    top: -16,
    left: 16,
    padding: 4,
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