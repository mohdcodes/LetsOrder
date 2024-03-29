import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
const ProducDetailScreen = () => {
  // a single screen with dynamic name which is used for multi product screens.
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: id + ' Pizza' }} />
      <Text style={{ fontSize: 20 }}>ProducDetailScreen for id: {id}</Text>
    </View>
  );
};

export default ProducDetailScreen;

const styles = StyleSheet.create({});
