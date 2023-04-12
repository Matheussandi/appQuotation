import { createBottomTabNavigator, BottomTabNavigationProp }
  from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'
import { Dashboard } from '../pages/Dashboard'
import { ListQuotation } from '../pages/ListQuotation'
import { SearchQuotation } from '../pages/SearchQuotation'

type AppRoutes = {
  dashboard: undefined;
  listQuotation: undefined;
  searchQuatation: undefined;
}

export type AppNavigatorRoutesProps =
  BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: {
        height: 88
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Adicionar',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='add-shopping-cart'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='listQuotation'
        component={ListQuotation}
        options={{
          tabBarLabel: 'Lista Cotação',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='receipt-long'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='searchQuatation'
        component={SearchQuotation}
        options={{
          tabBarLabel: 'Pesquisa Cotação',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='find-in-page'
              size={size}
              color={color}
            />
          )
        }}
      />

    </Navigator>
  )
}