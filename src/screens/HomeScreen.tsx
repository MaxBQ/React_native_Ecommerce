import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Categories from '../components/Categories';
import {useRef, useState} from 'react';
import ProductCard, {IProductItem} from '../components/ProductCard';
import data from '../data/data.json';
import GradientContainer from '../components/GradientContainer';

const categories = ['Trending Now', 'All', 'New', 'Man', 'Woman'];
export default function HomeScreen() {
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<IProductItem[]>(data.products);

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

  const handleClick = (item: IProductItem) => {
    const newProducts: IProductItem[] = products.map(product => {
      if (item.id === product.id && item?.isLike) {
        return {...product, isLike: false};
      } else if (item.id === product.id) {
        return {...product, isLike: true};
      }
      return product;
    });

    setProducts(newProducts);
  };

  return (
    <GradientContainer>
      <FlatList
        ListHeaderComponent={
          <>
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
                extraData={selectCategory}
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
          </>
        }
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ProductCard item={item} handleClick={handleClick} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      />
    </GradientContainer>
  );
}

const styles = StyleSheet.create({
  matchText: {
    fontSize: 28,
    color: 'black',
    marginTop: 14,
    lineHeight: 42,
    marginHorizontal: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  input: {flex: 1},
});
