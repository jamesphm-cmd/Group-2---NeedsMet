import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Crypto from 'expo-crypto'; // <-- Added for hashing

const CreatePin = () => {
  const [pin, setPin] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const handleChange = (text) => {
    const filtered = text.replace(/[^1-9]/g, ''); // Block letters and 0s
    setPin(filtered.slice(0, 5)); // Max 5 characters
  };

  const isPinValid = pin.length === 5;

  const handleContinue = async () => {
    try {
      const hashedPin = await Crypto.digestStringAsync( // <-- Hash the PIN
        Crypto.CryptoDigestAlgorithm.SHA256,
        pin
      );

      const response = await fetch(
        https://needsmet-e3547-default-rtdb.firebaseio.com/users/${userId}.json,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pin: hashedPin }), // <-- Save hashed PIN
        }
      );

      if (response.ok) {
        Alert.alert('Success', 'PIN created and saved successfully!');
        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000); // 2-second delay before navigation
      } else {
        Alert.alert('Error', 'Failed to save PIN. Try again.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Your USERID Is:</Text>
      <View style={styles.userIdBox}>
        <Text style={styles.userIdText}>{userId}</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={5}
        secureTextEntry
        value={pin}
        onChangeText={handleChange}
        placeholder="Create a 5-digit PIN"
      />

      <TouchableOpacity
        style={[styles.button, !isPinValid && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!isPinValid}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  userIdBox: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  userIdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800080',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePin;











// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Alert } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { ArrowLeft } from 'lucide-react'; 

// const CreatePinScreen = () => {
//   const [pin, setPin] = useState('');
//   const [isTextVisible, setIsTextVisible] = useState(true);
//   const inputRef = useRef(null);

    
//   const handleTextPress = () => {
//     setIsTextVisible(false); 
//         if (inputRef.current) {
//           inputRef.current.focus(); 
//         }
//   };

    
//     const handlePinChange = (value) => {
        
//         const numericValue = value.replace(/[^0-9]/g, '');
//         if (numericValue.length <= 5) {
//             setPin(numericValue);
//         }
//     };

    
//     const handleContinue = () => {
        
//         if (pin.length === 5) {
            
//             console.log('PIN entered:', pin);
//             alert(`PIN set to: ${pin}.  In a real app, you would now proceed to the next screen.`); 
            
//         } else {
//             Alert.alert(
//                 "Error",
//                 "Please enter a 5-digit PIN using only numbers.",
//                 [
//                   { text: "OK", onPress: () => {} }
//                 ],
//                 { cancelable: false }
//               );
//         }
//     };

//     useEffect(() => {
//         if (!isTextVisible && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [isTextVisible]);

//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <View style={styles.contentContainer}>
//         <TouchableOpacity
//           style={styles.textContainer}
//           onPress={handleTextPress} 
//           activeOpacity={1} 
//         >
//             {isTextVisible ? (
//                 <Text style={styles.createText}>Create a 5-digit PIN</Text>
//             ) : (
//                 <TextInput
//                     ref={inputRef}
//                     style={styles.pinInput}
//                     keyboardType="number-pad"
//                     value={pin}
//                     onChangeText={handlePinChange}
//                     maxLength={5}
//                     placeholder="" 
//                     placeholderTextColor="#888" 
//                     selectionColor="#000" 
//                     cursorColor="#000"
//                 />
//             )}
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.continueButton}
//           onPress={handleContinue}
//           disabled={isTextVisible}
//         >
//           <Text style={styles.continueButtonText}>CONTINUE</Text>
//         </TouchableOpacity>
//       </View>
//         {/* Back Button */}
//         <TouchableOpacity
//             style={styles.backButton}
//             onPress={() => {
                
//                 alert('Back button pressed.  In a real app, you would navigate to the previous screen.');
//             }}
//         >
//             <ArrowLeft color="#FFFFFF" size={24} />
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     width: '100%',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   textContainer: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#808080',
//   },
//   createText: {
//     color: '#808080',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   pinInput: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: '500',
//     width: '100%',
//     textAlign: 'center',
//     padding: 0,
//     height: '100%',
//   },
//   continueButton: {
//     backgroundColor: '#E53935', 
//     paddingVertical: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: '#FFFFFF', 
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//     backButton: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         padding: 10,
//         borderRadius: 25,
//         backgroundColor: '#E53935', 
//     },
// });

// export default CreatePinScreen;


