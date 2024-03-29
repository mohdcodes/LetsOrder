import { Image, StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.pizzahead}>{product.name}</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pizzahead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
