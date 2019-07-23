import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import DetailsScreen from "./screens/Details";
import FavoriteScreen from "./screens/Favorite";
import HomeScreen from "./screens/Home";
import SplashScreen from "./screens/Splash";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Favorite: FavoriteScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      App: AppStack
    },
    {
      initialRouteName: "Splash"
    }
  )
);
