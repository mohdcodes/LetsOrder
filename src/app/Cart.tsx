import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItems';
const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <Text>Cart Items Length: {items.length}</Text> */}
      <FlatList
        contentContainerStyle={{ padding: 10, gap: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
