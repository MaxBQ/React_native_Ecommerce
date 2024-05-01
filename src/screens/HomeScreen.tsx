import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Text>Home!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
