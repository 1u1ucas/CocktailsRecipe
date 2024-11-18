import { StyleSheet, Button, Text, View, ScrollView } from 'react-native'; 
import { useRouter } from 'expo-router';

const cocktails = [
  { id: '1',
    name: 'Mojito',
    description: 'Le mojito est un cocktail à base de rhum, de citron vert, de feuilles de menthe fraîche, de sucre de canne, et d’eau gazeuse.',
  },
  { id: '2',
    name: 'Margarita',
    description: 'La Margarita est un cocktail à base de tequila, de liqueur d’orange, et de jus de citron vert.',
  },
  { id: '3',
    name: 'Pina Colada',
    description: 'La Piña Colada est un cocktail à base de rhum, de jus d’ananas, et de lait de coco.',
  },
  { id: '4',
    name: 'Cosmopolitan',
    description: 'Le Cosmopolitan est un cocktail à base de vodka, de triple sec, de jus de cranberry, et de jus de citron vert.',
  }
];

export default function Index() {

  const router = useRouter();

  const handlePress = () => {
    router.push('counter'); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mixology Magic</Text>
      <Text style={styles.subtitle}>Découvrez l'art de la mixologie</Text>
      <Button title="Voir tout les cocktails" onPress={handlePress} />
      <Text style={styles.description}>Un cocktail est une boisson mélangée, souvent alcoolisée, composée de plusieurs ingrédients comme des spiritueux, des jus de fruits, des sirops et des sodas.</Text>
      <View style={styles.midContainer}>
        <Text style={styles.title}>Les meilleurs cocktails</Text>
        <ScrollView style={styles.list} horizontal={true}>
          {cocktails.map(cocktail => (
            <View key={cocktail.id} style={styles.card}>
              <Text style={styles.item}>{cocktail.name}</Text>
              <Text style={styles.item}>{cocktail.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>Buvez avec modération, si vous ne le trouvez pas, buvez sa part</Text>
      <Text>© 2021 Mixology Magic</Text>
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#000',
    height: 40,
    width: '100%',
  },
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
    padding: 20,
  },
  midContainer: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 20,
  },  
  list: {
    marginTop: 20,
    paddingLeft: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 200,
  },
  item: {
    fontSize: 18,
    padding: 5,
  },
  footer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    padding: 10,
  },

}); 