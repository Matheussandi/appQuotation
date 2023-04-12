import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Dashboard } from "../pages/Dashboard";
import { ListQuotation } from "../pages/ListQuotation";
import { SearchQuatation } from "../pages/SearchQuotation";

type AuthRoutes = {
  dashboard: undefined;
  listQuotation: undefined;
  searchQuatation: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="listQuotation" component={ListQuotation} />
      <Screen name="searchQuatation" component={SearchQuatation} />
    </Navigator>
  );
}
