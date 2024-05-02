import {StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

export default function HomeScreen() {
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
