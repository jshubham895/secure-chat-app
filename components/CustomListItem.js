import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = () => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
				}}
			/>
		</ListItem>
	);
};

export default CustomListItem;

const styles = StyleSheet.create({});
