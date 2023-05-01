import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>

        <View style={styles.containerInline}>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Article</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Article</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Article</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

        </View>

        <View style={styles.containerCollumn}>

          <View style={styles.sectionFooter}>
            <Text style={styles.sus}>Footer</Text>
            <Text style={styles.sus}>Footer</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sus}>Collumn</Text>
            <Text style={styles.sus}>Collumn</Text>     
          </View>

          <View style={styles.section}>
            <Text style={styles.sus}>Collumn</Text>
            <Text style={styles.sus}>Collumn</Text>
          </View> 

        </View>

        <View style={styles.containerInline}>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

          <View style={styles.sectionInline}>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
              <Text style={styles.sus}>Lado</Text>
          </View>

        </View>

        <View style={styles.section}>
          <Text style={styles.sus}>Collumn</Text>
          <Text style={styles.sus}>Collumn</Text>
          <Text style={styles.sus}>Collumn</Text>
          <Text style={styles.sus}>Collumn</Text>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'column',
    borderColor: 'red',
    borderWidth: 2,
  },
  sus: {
    fontSize: 30,
    color: 'cyan',
    fontFamily: 'Roboto',
  },
  section:{
    flex: 1,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 5,
  },
  sectionInline: {
    flex: 1,
    flexBasis: '10%',
    borderColor: 'green',
    borderWidth: 2,
  },
  containerInline: {
    flex: 1,
    flexDirection:'row',
    flexBasis: '10%',
  },
  containerCollumn : {
    flex: 1,
    flexDirection:'column',
    flexBasis: '20%',
  },
  sectionFooter:{
    borderColor: 'yellow',
    borderWidth: 2,
    marginBottom: 5,
  }
});
