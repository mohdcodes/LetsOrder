import products from '@/assets/data/products';
import { View } from '@/src/components/Themed';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[5]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
