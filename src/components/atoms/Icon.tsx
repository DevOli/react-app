import { StyleSheet, Image, View } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
}

const Icon: FC<Props> = (props) => {
  return (
    <View>
      <Ionicons
        name={props.icon}
        size={24}
        color={props.icon == 'md-alert-circle' ? '#F00' : '#555'} />
    </View>
  )
}

export default Icon;