// a single screen with dynamic name which is used for multi product screens.
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';
import { useCart } from '@/src/providers/CartProvider';
import { PizzaSize } from '@/src/types';

const ProducDetailScreen = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const { id } = useLocalSearchParams();
  // fectching the product from the dummy data..
  const product = products.find((p) => p.id.toString() === id);
  // if product is not available condition.
  if (!product) {
    return <Text>Product Not Found</Text>;
  }
  // add to cart function
  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/Cart');
  };
  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('XL');
  return (
    <View style={styles.constainer}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.selectSize}>Select size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <Pressable onPress={() => setSelectedSize(size)}>
            <View
              style={[
                styles.size,
                {
                  backgroundColor:
                    selectedSize === size ? Colors.light.tint : 'white',
                },
              ]}
            >
              <Text
                key={size}
                style={[
                  styles.sizeText,
                  { color: selectedSize === size ? 'white' : 'black' },
                ]}
              >
                {size}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>
        Price:{'  '}${product.price}
      </Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  );
};

export default ProducDetailScreen;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  selectSize: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  sizeText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 'auto',
  },
});
