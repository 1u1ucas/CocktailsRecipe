import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(count + 1);
}

return (
    <View style={styles.container}>
      <Text style={styles.title}>Compteur de verre</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
});