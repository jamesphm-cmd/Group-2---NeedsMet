import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft } from 'lucide-react'; // Import the back arrow icon

const CreatePinScreen = () => {
  const [pin, setPin] = useState('');
  const [isTextVisible, setIsTextVisible] = useState(true);
  const inputRef = useRef(null);

    // Function to handle the press event on the text.
  const handleTextPress = () => {
    setIsTextVisible(false); // Hide the text
        if (inputRef.current) {
          inputRef.current.focus(); // Focus on the TextInput
        }
  };

    // Function to handle PIN input changes
    const handlePinChange = (value) => {
        // Allow only numeric input and limit to 5 digits
        const numericValue = value.replace(/[^0-9]/g, '');
        if (numericValue.length <= 5) {
            setPin(numericValue);
        }
    };

    // Function to handle continue button press
    const handleContinue = () => {
        // Basic validation: Check if the PIN is 5 digits long
        if (pin.length === 5) {
            // In a real app, you would save the PIN securely here (e.g., using react-native-sensitive-info)
            console.log('PIN entered:', pin);
            alert(`PIN set to: ${pin}.  In a real app, you would now proceed to the next screen.`); //Replace with navigation
            // You would also navigate to the next screen here
        } else {
            Alert.alert(
                "Error",
                "Please enter a 5-digit PIN using only numbers.",
                [
                  { text: "OK", onPress: () => {} }
                ],
                { cancelable: false }
              );
        }
    };

    useEffect(() => {
        if (!isTextVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isTextVisible]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={handleTextPress} // Attach the press handler
          activeOpacity={1} // Prevent opacity change on press
        >
            {isTextVisible ? (
                <Text style={styles.createText}>Create a 5-digit PIN</Text>
            ) : (
                <TextInput
                    ref={inputRef}
                    style={styles.pinInput}
                    keyboardType="number-pad"
                    value={pin}
                    onChangeText={handlePinChange}
                    maxLength={5}
                    placeholder="" // You can set a placeholder if needed
                    placeholderTextColor="#888" // Placeholder color
                    selectionColor="#000" // Android cursor color
                    cursorColor="#000"
                />
            )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          disabled={isTextVisible}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
        {/* Back Button */}
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
                // In a real app, you'd use navigation.goBack();
                alert('Back button pressed.  In a real app, you would navigate to the previous screen.');
            }}
        >
            <ArrowLeft color="#FFFFFF" size={24} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#808080',
  },
  createText: {
    color: '#808080',
    fontSize: 18,
    fontWeight: '500',
  },
  pinInput: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    padding: 0,
    height: '100%',
  },
  continueButton: {
    backgroundColor: '#E53935', // Red button color
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
    backButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#E53935', // Match the continue button color
    },
});

export default CreatePinScreen;


