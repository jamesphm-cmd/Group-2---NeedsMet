import * as React from "react";
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI10 = () => {
  	
  	return (
    		<ScrollView style={styles.needsmetUi10}>
      			<View style={[styles.button, styles.buttonFlexBox]}>
        				<Text style={[styles.button1, styles.buttonTypo]}>ACCEPT REQUEST</Text>
      			</View>
      			<View style={[styles.buttonDanger, styles.buttonFlexBox]}>
        				<Text style={[styles.button2, styles.buttonTypo]}>DECLINE</Text>
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
    		</ScrollView>);
};

const styles = StyleSheet.create({
  	buttonFlexBox: {
    		padding: 12,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		overflow: "hidden",
    		width: 352,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		left: 20,
    		position: "absolute"
  	},
  	buttonTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16
  	},
  	bellLayout: {
    		height: 28,
    		width: 28,
    		top: 10,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		position: "absolute",
    		maxWidth: "100%"
  	},
  	textTypo: {
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 14,
    		top: 14,
    		position: "absolute"
  	},
  	button1: {
    		color: "#f5f5f5"
  	},
  	button: {
    		top: 231,
    		backgroundColor: "#2c2c2c",
    		borderColor: "#2c2c2c"
  	},
  	button2: {
    		color: "#fee9e7"
  	},
  	buttonDanger: {
    		top: 386,
    		backgroundColor: "#ec221f",
    		borderColor: "#c00f0c"
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
  	needsmetUi10: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		maxWidth: "100%"
  	}
});

export default NEEDSMETUI10;
