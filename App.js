import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpensives from "./screens/ManageExpensives";
import RecentExpensives from "./screens/RecentExpensives";
import AllExpensives from "./screens/AllExpensives";

import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./utils/styles";
const { colors } = GlobalStyles;

import IconButton from "./components/ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerRight: ({ tintColor }) => (
					<IconButton
						name={"add"}
						color={tintColor}
						size={24}
						onPress={() => {
							navigation.navigate("ManageExpenses");
						}}
					/>
				),
				headerStyle: {
					backgroundColor: colors.primary500
				},
				headerTintColor: "white",
				tabBarStyle: {
					backgroundColor: colors.primary500
					// position: "absolute",
					// left: 50,
					// right: 50,
					// bottom: 20,
					// height: 100
				},
				tabBarActiveTintColor: colors.accent500
			})}
		>
			<BottomTabs.Screen
				name="RecentExpensives"
				component={RecentExpensives}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" color={color} size={size} />
					)
				}}
			/>
			<BottomTabs.Screen
				name="AllExpensives"
				component={AllExpensives}
				options={{
					title: "All Expenses",
					tabBarLabel: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="calendar" color={color} size={size} />
					)
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<ExpensesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: colors.primary500
							},
							headerTintColor: "white"
						}}
					>
						<Stack.Screen
							name="ExpensesOverview"
							component={ExpensesOverview}
							options={{
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="ManageExpenses"
							component={ManageExpensives}
							options={{
								presentation: "modal"
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpensesContextProvider>
		</>
	);
}
