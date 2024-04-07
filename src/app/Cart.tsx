import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItems';
import Button from '../components/Button';
const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <Text>Cart Items Length: {items.length}</Text> */}
      <FlatList
        contentContainerStyle={{ padding: 10, gap: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
        Total:- ${total}
      </Text>
      <Button text="Check Out" />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
