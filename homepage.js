import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Image
        source={require('./assets/images/IMG-20250401-WA0015.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover', // Optional
  },
});

export default MyComponent;

      />
      <Text style={styles.text}>
        Get your needs delivered without stepping out of the hostel
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 300, height: 200, marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
  loginButton: {
    backgroundColor: '#000',
    padding: 12,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  signupButton: {
    backgroundColor: 'red',
    padding: 12,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
