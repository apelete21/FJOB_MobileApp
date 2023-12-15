import { View, Text } from 'react-native'
import React from 'react'

// styles
import { splashStyles } from './splash.styles'

export function Splash() {
  return (
    <View style={splashStyles.container}>
      <Text>Splash</Text>
    </View>
  )
}