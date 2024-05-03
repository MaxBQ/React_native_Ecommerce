import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Categories from '../components/Categories';
import {useRef, useState} from 'react';

const categories = ['Trending Now', 'All', 'New', 'Man', 'Woman'];
export default function HomeScreen() {
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const flatListRef = useRef<FlatList<string> | null>(null);
  const onPressSelect = (item: string, index: number) => {
    setSelectCategory(item);
    flatListRef &&
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index,
        viewPosition: 0.5,
      });
  };
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={'search'} size={26} color={'#C0C0C0'} />
        </View>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item, index}) => (
            <Categories
              categoryItem={item}
              index={index}
              selectCategory={selectCategory}
              setSelectCategory={onPressSelect}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  matchText: {fontSize: 28, color: 'black', marginTop: 24, lineHeight: 42},
  searchContainer: {
    backgroundColor: 'white',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 12,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  input: {flex: 1},
});
