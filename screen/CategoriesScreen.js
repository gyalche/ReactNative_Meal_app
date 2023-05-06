import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data.js';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen() {
  function renderCategoryItems(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}
