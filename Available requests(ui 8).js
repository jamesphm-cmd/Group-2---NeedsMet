import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Person from "../assets/person.svg"
import Person1 from "../assets/person1.svg"
import Person2 from "../assets/person2.svg"
import Person3 from "../assets/person3.svg"
import Star from "../assets/star.svg"
import Star1 from "../assets/star1.svg"
import Star2 from "../assets/star2.svg"
import Star3 from "../assets/star3.svg"
import Star4 from "../assets/star4.svg"
import Star5 from "../assets/star5.svg"
import Star6 from "../assets/star6.svg"
import Star7 from "../assets/star7.svg"
import Star8 from "../assets/star8.svg"
import Star9 from "../assets/star9.svg"
import Star10 from "../assets/star10.svg"
import Star11 from "../assets/star11.svg"
import Star12 from "../assets/star12.svg"
import Star13 from "../assets/star13.svg"
import Star14 from "../assets/star14.svg"
import Star15 from "../assets/star15.svg"
import Star16 from "../assets/star16.svg"
import Star17 from "../assets/star17.svg"
import Star18 from "../assets/star18.svg"
import Star19 from "../assets/star19.svg"
import Icon from "../assets/icon.svg"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"

const NEEDSMETUI8 = () => {
  	
  	return (
    		<SafeAreaView style={styles.needsmetUi8}>
      			<Text style={styles.availableRquests}>AVAILABLE RQUESTS</Text>
      			<View style={[styles.needsmetUi8Child, styles.needsmetLayout]} />
      			<View style={[styles.needsmetUi8Item, styles.needsmetLayout]} />
      			<View style={[styles.needsmetUi8Inner, styles.personIcon2Position]} />
      			<View style={[styles.rectangleView, styles.personIcon3Position]} />
      			<Person style={[styles.personIcon, styles.personIconLayout]} width={30} height={30} />
      			<Person1 style={[styles.personIcon1, styles.personIconLayout]} width={30} height={30} />
      			<Person2 style={[styles.personIcon2, styles.personIconLayout]} width={30} height={30} />
      			<Person3 style={[styles.personIcon3, styles.personIconLayout]} width={30} height={30} />
      			<Text style={[styles.user1Ratings, styles.ratingsTypo1]}>{`USER 1
        				RATINGS`}</Text>
      			<Text style={[styles.user2Ratings, styles.ratingsTypo]}>{`USER 2
        				RATINGS`}</Text>
      			<Text style={[styles.user3Ratings, styles.ratingsTypo1]}>{`USER 3
        				RATINGS`}</Text>
      			<Text style={[styles.user4Ratings, styles.ratingsTypo]}>{`USER 4
        				RATINGS`}</Text>
      			<Star style={[styles.starIcon, styles.starIconLayout]} width={24} height={24} />
      			<Star1 style={[styles.starIcon1, styles.starIconLayout]} width={24} height={24} />
      			<Star2 style={[styles.starIcon2, styles.starIconPosition2]} width={24} height={24} />
      			<Star3 style={[styles.starIcon3, styles.starIconLayout]} width={24} height={24} />
      			<Star4 style={[styles.starIcon4, styles.starIconLayout]} width={24} height={24} />
      			<Star5 style={[styles.starIcon5, styles.starIconLayout]} width={24} height={24} />
      			<Star6 style={[styles.starIcon6, styles.starIconPosition2]} width={24} height={24} />
      			<Star7 style={[styles.starIcon7, styles.starIconPosition2]} width={24} height={24} />
      			<Star8 style={[styles.starIcon8, styles.starIconPosition2]} width={24} height={24} />
      			<Star9 style={[styles.starIcon9, styles.starIconPosition2]} width={24} height={24} />
      			<Star10 style={[styles.starIcon10, styles.starIconPosition1]} width={24} height={24} />
      			<Star11 style={[styles.starIcon11, styles.starIconPosition1]} width={24} height={24} />
      			<Star12 style={[styles.starIcon12, styles.starIconPosition1]} width={24} height={24} />
      			<Star13 style={[styles.starIcon13, styles.starIconPosition1]} width={24} height={24} />
      			<Star14 style={[styles.starIcon14, styles.starIconPosition1]} width={24} height={24} />
      			<Star15 style={[styles.starIcon15, styles.starIconPosition]} width={24} height={24} />
      			<Star16 style={[styles.starIcon16, styles.starIconPosition]} width={24} height={24} />
      			<Star17 style={[styles.starIcon17, styles.starIconPosition]} width={24} height={24} />
      			<Star18 style={[styles.starIcon18, styles.starIconPosition]} width={24} height={24} />
      			<Star19 style={[styles.starIcon19, styles.starIconPosition]} width={24} height={24} />
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
  	needsmetLayout: {
    		height: 81,
    		width: 352,
    		backgroundColor: "#d9d9d9",
    		position: "absolute"
  	},
  	personIcon2Position: {
    		top: 527,
    		left: 20
  	},
  	personIcon3Position: {
    		top: 678,
    		left: 20
  	},
  	personIconLayout: {
    		height: 30,
    		width: 30,
    		position: "absolute"
  	},
  	ratingsTypo1: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		left: 62,
    		color: "#000",
    		position: "absolute"
  	},
  	ratingsTypo: {
    		left: 59,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 16,
    		fontSize: 16,
    		color: "#000",
    		position: "absolute"
  	},
  	starIconLayout: {
    		height: 24,
    		width: 24,
    		top: 266,
    		position: "absolute"
  	},
  	starIconPosition2: {
    		top: 414,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	starIconPosition1: {
    		top: 568,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	starIconPosition: {
    		top: 719,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	bellLayout: {
    		width: 28,
    		top: 10,
    		height: 28,
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
    		textAlign: "center",
    		color: "#000",
    		position: "absolute"
  	},
  	availableRquests: {
    		top: 114,
    		left: 40,
    		fontSize: 26,
    		lineHeight: 26,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		width: 313,
    		height: 28,
    		textAlign: "center",
    		color: "#000",
    		position: "absolute"
  	},
  	needsmetUi8Child: {
    		left: 20,
    		top: 225
  	},
  	needsmetUi8Item: {
    		left: 22,
    		top: 376
  	},
  	needsmetUi8Inner: {
    		height: 81,
    		width: 352,
    		backgroundColor: "#d9d9d9",
    		position: "absolute"
  	},
  	rectangleView: {
    		height: 81,
    		width: 352,
    		backgroundColor: "#d9d9d9",
    		position: "absolute"
  	},
  	personIcon: {
    		left: 25,
    		top: 225
  	},
  	personIcon1: {
    		top: 376,
    		left: 20
  	},
  	personIcon2: {
    		top: 527,
    		left: 20
  	},
  	personIcon3: {
    		top: 678,
    		left: 20
  	},
  	user1Ratings: {
    		top: 226
  	},
  	user2Ratings: {
    		top: 377
  	},
  	user3Ratings: {
    		top: 528
  	},
  	user4Ratings: {
    		top: 679
  	},
  	starIcon: {
    		left: 50
  	},
  	starIcon1: {
    		left: 116
  	},
  	starIcon2: {
    		left: 50
  	},
  	starIcon3: {
    		left: 149
  	},
  	starIcon4: {
    		left: 182
  	},
  	starIcon5: {
    		left: 83
  	},
  	starIcon6: {
    		left: 83
  	},
  	starIcon7: {
    		left: 116
  	},
  	starIcon8: {
    		left: 149
  	},
  	starIcon9: {
    		left: 182
  	},
  	starIcon10: {
    		left: 50
  	},
  	starIcon11: {
    		left: 83
  	},
  	starIcon12: {
    		left: 116
  	},
  	starIcon13: {
    		left: 149
  	},
  	starIcon14: {
    		left: 182
  	},
  	starIcon15: {
    		left: 50
  	},
  	starIcon16: {
    		left: 83
  	},
  	starIcon17: {
    		left: 116
  	},
  	starIcon18: {
    		left: 149
  	},
  	starIcon19: {
    		left: 182
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
  	needsmetUi8: {
    		backgroundColor: "#fff",
    		borderStyle: "solid",
    		borderColor: "#000",
    		borderWidth: 1,
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default NEEDSMETUI8;
