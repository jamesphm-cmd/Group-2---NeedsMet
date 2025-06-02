import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Add this
import { TabRouter } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    const navigation = useNavigation(); // Add this

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor('#1E90FF');
        return () => {
            StatusBar.setBarStyle('default');
            StatusBar.setBackgroundColor('white');
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.welcomeText}>WELCOME TO NEEDSMET</Text>
                <View style={styles.appInfoContainer}>
                  <Text style={styles.appName}>NeedsMet</Text>
                  <Text style={styles.slogan}>Helping students help each other</Text>
                </View>
            </View>

            <Text style={styles.description}>
                Needsmet is a mobile application designed to assist hostel students in acquiring essential items from nearby stores.
                Needsmet bridges this gap by allowing students who are available to shop to fulfill requests for a small delivery fee.
            </Text>

            {/* Button to go to SplashScreen2 */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashScreen2')}>
                <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: height * 0.05,
        paddingTop: height * 0.1,
    },
    content: {
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    welcomeText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    appInfoContainer: {
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    slogan: {
        fontSize: 16,
        color: 'grey',
        marginTop: 5,
    },
    description: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        width: '85%',
        lineHeight: 22,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginBottom: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SplashScreen;


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const SplashScreen = ({ navigation }) => {
//     useEffect(() => {
//         StatusBar.setBarStyle('light-content'); // Set status bar text color to white
//         StatusBar.setBackgroundColor('#1E90FF'); // Set status bar background color to blue
//         return () => {
//             StatusBar.setBarStyle('default'); // Reset status bar style when component unmounts
//             StatusBar.setBackgroundColor('white'); // Reset status bar background color
//         };
//     }, []);

//     return (
//         <View style={styles.container}>
//             {/* App Name and Slogan */}
//             <View style={styles.content}>
//                 <Text style={styles.welcomeText}>WELCOME TO NEEDSMET</Text>
//                 <View style={styles.appInfoContainer}>
//                   <Text style={styles.appName}>NeedsMet</Text>
//                   <Text style={styles.slogan}>Helping students help each other</Text>
//                 </View>
//             </View>

//             {/* Description Text */}
//             <Text style={styles.description}>
//                 Needsmet is a mobile application designed to assist hostel students in acquiring essential items from nearby stores. Needsmet bridges this gap by allowing students who are available to shop to fulfill requests for a small delivery fee.
//             </Text>

//             {/* Get Started Button */}
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashScreen2')}>
//                 <Text style={styles.buttonText}>GET STARTED</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1E90FF',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingBottom: height * 0.05,
//         paddingTop: height * 0.1,
//     },
//     content: {
//         alignItems: 'center',
//         marginTop: height * 0.05, // reduced from 0.15
//     },
//     welcomeText: {
//         fontSize: 24, // fixed, readable size
//         color: 'white',
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     appInfoContainer: {
//         backgroundColor: 'white',
//         paddingVertical: 20,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     appName: {
//         fontSize: 32, // fixed
//         fontWeight: 'bold',
//         color: '#1E90FF',
//     },
//     slogan: {
//         fontSize: 16, // fixed
//         color: 'grey',
//         marginTop: 5,
//     },
//     description: {
//         color: 'white',
//         fontSize: 16,
//         textAlign: 'center',
//         width: '20%', // limit width to 85% of the screen
//         lineHeight: 22, // better spacing between lines
//         marginBottom: 20,
//     },
    
//     button: {
//         backgroundColor: 'red',
//         paddingVertical: 15,
//         paddingHorizontal: 60,
//         borderRadius: 10,
//         marginBottom: 30,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });


// export default SplashScreen;
