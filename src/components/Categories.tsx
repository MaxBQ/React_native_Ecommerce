import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';

interface CategoriesProps {
  categoryItem: string;
  selectCategory: string | null;
  setSelectCategory: (item: string, index: number) => void;
  index: number;
}

const Categories = (props: CategoriesProps) => {
  const {selectCategory, setSelectCategory, categoryItem, index} = props;
  return (
    <TouchableOpacity
      style={[
        styles.category,
        selectCategory === categoryItem && styles.categorySelect,
      ]}
      onPress={() => {
        setSelectCategory(categoryItem, index);
      }}>
      <Text>{categoryItem}</Text>
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#DFDCDC',
    color: '#938F8F',
    fontSize: 16,
    fontWeight: 600,
    alignItems: 'center',
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categorySelect: {
    color: '#E96E6E',
    backgroundColor: '#E96E6E',
  },
});
