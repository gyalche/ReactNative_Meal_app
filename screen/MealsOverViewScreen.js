import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
export default function MealsOverViewScreen({ route }) {
  //you can also use these hooks
  // const router = useRoute();
  // router.params.id;
  const catId = route.params.categoryId;
  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const mealsProps = {
      title: itemData.item.title,
      image: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealsProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
