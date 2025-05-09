import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI2 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi2}>
      			<View style={[styles.buttonDanger, styles.buttonFlexBox]}>
        				<Text style={[styles.button, styles.buttonTypo]}>SIGN UP</Text>
      			</View>
      			<View style={[styles.button1, styles.buttonFlexBox]}>
        				<Text style={[styles.button2, styles.buttonTypo]}>LOGIN</Text>
      			</View>
      			<Text style={styles.getYourNeeds}>{`Get your needs delivered without
        				stepping out of the hostel.`}</Text>
      			<Image style={styles.image4Icon} resizeMode="cover" source="image 4.png" />
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
  	buttonFlexBox: {
    		padding: 12,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		width: 234,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		left: 79,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	buttonTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		lineHeight: 16,
    		fontSize: 16
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
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 14,
    		top: 14,
    		color: "#000",
    		position: "absolute"
  	},
  	button: {
    		color: "#fee9e7"
  	},
  	buttonDanger: {
    		top: 695,
    		backgroundColor: "#ec221f",
    		borderColor: "#c00f0c"
  	},
  	button2: {
    		color: "#f5f5f5"
  	},
  	button1: {
    		top: 612,
    		backgroundColor: "#2c2c2c",
    		borderColor: "#2c2c2c"
  	},
  	getYourNeeds: {
    		top: 513,
    		left: 8,
    		fontSize: 24,
    		letterSpacing: 1,
    		lineHeight: 28,
    		fontFamily: "Roboto-Bold",
    		color: "#000",
    		textAlign: "left",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	image4Icon: {
    		top: 118,
    		left: 0,
    		width: 393,
    		height: 395,
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
  	needsmetUi2: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default NEEDSMETUI2;
