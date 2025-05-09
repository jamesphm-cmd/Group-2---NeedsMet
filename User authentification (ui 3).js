import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI3 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi3}>
      			<Image style={styles.image2Icon} resizeMode="cover" source="image 2.png" />
      			<View style={[styles.inputChip, styles.inputFlexBox]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>USER-ID</Text>
        				</View>
      			</View>
      			<View style={[styles.inputChip1, styles.inputFlexBox]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>PASSWORD</Text>
        				</View>
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
  	inputFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
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
    		color: "#000",
    		top: 14,
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 14,
    		position: "absolute"
  	},
  	image2Icon: {
    		top: 109,
    		left: 77,
    		borderRadius: 36,
    		width: 238,
    		height: 238,
    		position: "absolute"
  	},
  	labelText: {
    		color: "#49454f",
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 14
  	},
  	stateLayer: {
    		paddingHorizontal: 12,
    		paddingVertical: 6
  	},
  	inputChip: {
    		top: 426,
    		left: 75,
    		height: 32,
    		width: 242,
    		borderWidth: 1,
    		borderColor: "#cac4d0",
    		borderStyle: "solid",
    		borderRadius: 8,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	inputChip1: {
    		top: 537,
    		left: 73,
    		height: 32,
    		width: 242,
    		borderWidth: 1,
    		borderColor: "#cac4d0",
    		borderStyle: "solid",
    		borderRadius: 8,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute",
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
  	needsmetUi3: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default NEEDSMETUI3;
