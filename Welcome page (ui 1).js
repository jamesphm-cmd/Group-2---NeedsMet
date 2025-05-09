import * as React from "react";
import {Text, StyleSheet, Image, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI1 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi1}>
      			<Text style={[styles.needsmetIsA, styles.needsmetFlexBox]}>Needsmet is a mobile application designed to assist hostel students in acquiring  essential items from nearby stores. Needsmet bridges this gap by allowing students who are  available to shop to fulfill requests for a small delivery fee.</Text>
      			<Image style={styles.image3Icon} resizeMode="cover" source="image 3.png" />
      			<View style={[styles.buttonDanger, styles.needsmetFlexBox]}>
        				<Text style={styles.button}>GET STARTED</Text>
      			</View>
      			<View style={[styles.barChart, styles.bellLayout]}>
        				<Icon style={[styles.icon, styles.iconLayout]} />
      			</View>
      			<Text style={[styles.welcomeToNeedsmet, styles.needsmetFlexBox]}>WELCOME TO NEEDSMET</Text>
      			<View style={[styles.battery, styles.bellLayout]}>
        				<Icon1 style={[styles.icon1, styles.iconLayout]} />
      			</View>
      			<View style={[styles.bell, styles.bellLayout]}>
        				<Icon2 style={[styles.icon2, styles.iconLayout]} />
      			</View>
      			<Text style={[styles.text, styles.textTypo]}>68%</Text>
      			<Text style={[styles.text1, styles.textTypo]}>11:52</Text>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	needsmetFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute"
  	},
  	bellLayout: {
    		height: 28,
    		width: 28,
    		top: 10,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textTypo: {
    		fontSize: 14,
    		top: 14,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	needsmetIsA: {
    		top: 440,
    		width: 393,
    		height: 154,
    		display: "flex",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 20,
    		letterSpacing: 0,
    		justifyContent: "center",
    		alignItems: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		fontSize: 16,
    		left: 1
  	},
  	image3Icon: {
    		top: 157,
    		width: 394,
    		height: 269,
    		left: 1,
    		position: "absolute"
  	},
  	button: {
    		lineHeight: 16,
    		fontFamily: "Inter-Bold",
    		color: "#fee9e7",
    		textAlign: "left",
    		fontWeight: "700",
    		fontSize: 16
  	},
  	buttonDanger: {
    		top: 687,
    		left: 77,
    		borderRadius: 8,
    		backgroundColor: "#ec221f",
    		borderStyle: "solid",
    		borderColor: "#c00f0c",
    		borderWidth: 1,
    		width: 238,
    		height: 60,
    		flexDirection: "row",
    		padding: 12,
    		overflow: "hidden"
  	},
  	icon: {
    		height: "66.79%",
    		width: "50%",
    		top: "16.67%",
    		right: "25%",
    		bottom: "16.55%",
    		left: "25%"
  	},
  	barChart: {
    		left: 10
  	},
  	welcomeToNeedsmet: {
    		top: 113,
    		left: 68,
    		fontSize: 17,
    		fontFamily: "Roboto-Bold",
    		width: 259,
    		height: 18,
    		fontWeight: "700",
    		display: "flex",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 20,
    		letterSpacing: 0,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	icon1: {
    		height: "50%",
    		width: "91.79%",
    		top: "25%",
    		right: "4.05%",
    		bottom: "25%",
    		left: "4.17%"
  	},
  	battery: {
    		left: 315
  	},
  	icon2: {
    		height: "83.21%",
    		width: "75%",
    		top: "8.33%",
    		right: "12.5%",
    		bottom: "8.45%",
    		left: "12.5%"
  	},
  	bell: {
    		left: 48
  	},
  	text: {
    		left: 280
  	},
  	text1: {
    		left: 351
  	},
  	needsmetUi1: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default NEEDSMETUI1;
