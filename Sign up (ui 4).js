import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Ellipse1 from "../assets/ellipse-1.svg"
import Accountcircle from "../assets/account-circle.svg"
import Addcircle from "../assets/add-circle.svg"
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI4 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi4}>
      			<Ellipse1 style={styles.needsmetUi4Child} width={130} height={130} />
      			<Accountcircle style={styles.accountCircleIcon} width={50} height={50} />
      			<Addcircle style={styles.addCircleIcon} width={24} height={24} />
      			<View style={[styles.inputChip, styles.inputFlexBox]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>NAME</Text>
        				</View>
      			</View>
      			<View style={[styles.inputChip1, styles.inputFlexBox]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>PHONE NUMBER</Text>
        				</View>
      			</View>
      			<View style={[styles.inputChip2, styles.inputLayout]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>SURNAME</Text>
        				</View>
      			</View>
      			<View style={[styles.inputChip3, styles.inputLayout]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>ROOM NUMBER</Text>
        				</View>
      			</View>
      			<View style={[styles.inputChip4, styles.inputFlexBox]}>
        				<View style={[styles.stateLayer, styles.inputFlexBox]}>
          					<Text style={styles.labelText}>STUDENT NUMBER</Text>
        				</View>
      			</View>
      			<View style={[styles.buttonDanger, styles.inputFlexBox]}>
        				<Text style={styles.button}>CONTINUE</Text>
      			</View>
      			<View style={[styles.barChart, styles.bellLayout]}>
        				<Icon style={[styles.icon, styles.iconLayout]} />
      			</View>
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
  	inputFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	inputLayout: {
    		left: 217,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		height: 32,
    		width: 160,
    		borderWidth: 1,
    		borderColor: "#cac4d0",
    		borderStyle: "solid",
    		borderRadius: 8,
    		position: "absolute",
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
  	needsmetUi4Child: {
    		top: 134,
    		left: 131,
    		position: "absolute"
  	},
  	accountCircleIcon: {
    		top: 174,
    		left: 171,
    		position: "absolute"
  	},
  	addCircleIcon: {
    		top: 208,
    		left: 205,
    		position: "absolute",
    		overflow: "hidden"
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
    		left: 11,
    		height: 32,
    		width: 160,
    		borderColor: "#cac4d0",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		position: "absolute",
    		overflow: "hidden",
    		top: 333
  	},
  	inputChip1: {
    		left: 15,
    		top: 407,
    		height: 32,
    		width: 160,
    		borderColor: "#cac4d0",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	inputChip2: {
    		top: 333
  	},
  	inputChip3: {
    		top: 407
  	},
  	inputChip4: {
    		top: 481,
    		left: 116,
    		height: 32,
    		width: 160,
    		borderColor: "#cac4d0",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 8,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	button: {
    		fontSize: 16,
    		lineHeight: 16,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		color: "#fee9e7",
    		textAlign: "left"
  	},
  	buttonDanger: {
    		top: 629,
    		left: 46,
    		backgroundColor: "#ec221f",
    		borderColor: "#c00f0c",
    		width: 300,
    		padding: 12,
    		borderWidth: 1,
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
  	needsmetUi4: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default NEEDSMETUI4;
