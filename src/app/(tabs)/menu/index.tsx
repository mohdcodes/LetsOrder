import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import { FlatList } from 'react-native';

export default function MenuScreen() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 15, gap: 15 }}
      columnWrapperStyle={{ gap: 15 }}
      numColumns={2}
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
