import { Image, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';
// defining the types is order to prevent the bugs in the production.
type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: product.image || undefined }}
        />
        <Text style={styles.pizzahead}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};
export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    maxWidth: '50%',
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
