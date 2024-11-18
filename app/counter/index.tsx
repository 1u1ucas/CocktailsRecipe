import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(count + 1);
}

const handleDecrement = () => {
    if (count === 0) {
        return;
    }
    setCount(count - 1);
}

return (
    <View style={styles.container}>
      <Text style={styles.title}>Compteur de verre</Text>
      <View style={styles.buttonContainer}>
      <Button title="-" onPress={handleDecrement} />
        <Text style={styles.count}>{count}</Text>
        <Button title="+" onPress={handleIncrement} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    count: {
        fontSize: 24,
        marginHorizontal: 20,
    }
});