import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import TabNavigator from "./src";

AppRegistry.registerComponent(appName, () => TabNavigator);