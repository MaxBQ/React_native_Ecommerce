import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GradientContainer from '../components/GradientContainer';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IProductItem} from '../components/ProductCard';

type TParamList = {
  ProductDetail: {
    item: IProductItem;
  };
};

type TParamsProduct = {
  size?: string;
  color?: string;
};

const sizesData = ['S', 'M', 'L', 'XL'];
const colorsData = [
  '#91A1B0',
  '#B11D1DD4',
  '#1F44A3C2',
  '#9F632AD4',
  '#1D752BDB',
  '#000000C9',
];

const ProductDetailScreen = () => {
  const [colors, setColors] = useState(colorsData);
  const [sizes, setSizes] = useState(sizesData);
  const [selectParamsProduct, setSelectParamsProduct] =
    useState<TParamsProduct>({} as TParamsProduct);

  const {
    params: {item},
  } = useRoute<RouteProp<TParamList, 'ProductDetail'>>();

  const selectParams = (params: TParamsProduct) => {
    setSelectParamsProduct(prev => ({...prev, ...params}));
  };

  return (
    <GradientContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} src={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View>
          <Text style={styles.textParams}>Size</Text>
          <View style={styles.containerParams}>
            {sizes.map(size => (
              <TouchableOpacity
                onPress={() => selectParams({size})}
                key={size}
                style={styles.size}>
                <Text
                  style={[
                    styles.sizeText,
                    selectParamsProduct.size === size && {color: '#E96E6E'},
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.textParams}>Color</Text>
          <View style={styles.containerParams}>
            {colors.map(color => (
              <TouchableOpacity
                onPress={() => selectParams({color})}
                key={color}
                style={[
                  styles.color,
                  {borderColor: color},
                  selectParamsProduct.color === color && {borderWidth: 2},
                ]}>
                <View style={[styles.colorCircle, {backgroundColor: color}]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.buttonCart}>
          <Text style={styles.buttonCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientContainer>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 413,
    objectFit: 'cover',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '600',
  },
  textParams: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 10,
    color: '#444444',
  },
  containerParams: {
    flexDirection: 'row',
    gap: 10,
  },
  size: {
    backgroundColor: 'white',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444444',
  },
  color: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  buttonCart: {
    backgroundColor: '#E96E6E',
    marginTop: 20,
    padding: 15,
    borderRadius: 20,
  },
  buttonCartText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
});
