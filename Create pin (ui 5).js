import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI5 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi5}>
      			<View style={styles.inputField}>
        				<View style={[styles.input, styles.inputBorder]}>
          					<Text style={styles.value}>Create a 5-digit PIN</Text>
        				</View>
      			</View>
      			<Text style={styles.createAFive}>-Create a five digit pasword</Text>
      			<View style={[styles.buttonDanger, styles.inputBorder]}>
        				<Text style={styles.button}>CONTINUE</Text>
      			</View>
      			<View style={[styles.barChart, styles.bellLayout]}>
        				<Icon style={[styles.icon, styles.iconLayout]} />
      			</View>
      			<View style={[styles.bell, styles.bellLayout]}>
        				<Icon1 style={[styles.icon1, styles.iconLayout]} />
      			</View>
      			<View style={[styles.battery, styles.bellLayout]}>
        				<Icon2 style={[styles.icon2, styles.iconLayout]} />
      			</View>
      			<Text style={[styles.text, styles.textTypo]}>68%</Text>
      			<Text style={[styles.text1, styles.textTypo]}>11:52</Text>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	inputBorder: {
    		alignItems: "center",
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		overflow: "hidden"
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
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 14,
    		top: 14,
    		color: "#000",
    		textAlign: "center",
    		position: "absolute"
  	},
  	value: {
    		color: "#1e1e1e",
    		textAlign: "center",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		flex: 1
  	},
  	input: {
    		borderColor: "#d9d9d9",
    		width: 241,
    		paddingHorizontal: 16,
    		paddingVertical: 12,
    		minWidth: 240,
    		backgroundColor: "#fff",
    		alignItems: "center",
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8
  	},
  	inputField: {
    		top: 183,
    		left: 76,
    		position: "absolute"
  	},
  	createAFive: {
    		top: 236,
    		left: 91,
    		width: 211,
    		height: 18,
    		display: "none",
    		color: "#000",
    		textAlign: "center",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		position: "absolute"
  	},
  	button: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		color: "#fee9e7",
    		textAlign: "left",
    		lineHeight: 16,
    		fontSize: 16
  	},
  	buttonDanger: {
    		top: 395,
    		left: 96,
    		backgroundColor: "#ec221f",
    		borderColor: "#c00f0c",
    		width: 200,
    		justifyContent: "center",
    		padding: 12,
    		position: "absolute"
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
  	icon1: {
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
  	icon2: {
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
  	text: {
    		left: 280
  	},
  	text1: {
    		left: 351
  	},
  	needsmetUi5: {
    		width: "100%",
    		height: 852,
    		overflow: "hidden",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

export default NEEDSMETUI5;
