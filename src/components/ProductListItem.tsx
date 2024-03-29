import { Image, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.pizzahead}>{product.name}</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
};
export default ProductListItem;
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
