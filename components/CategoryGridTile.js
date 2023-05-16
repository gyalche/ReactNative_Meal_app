import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
export default function CategoryGridTile({ title, color, onPress }) {
  const navigator = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressable : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  button: {
    flex: 1,
  },
  buttonPressable: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
