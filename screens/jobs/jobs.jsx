import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Jobs() {
  return (
    <View style={styles.container}>
      <Text>Jobs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})