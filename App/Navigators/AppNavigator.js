import { createAppContainer, createStackNavigator } from 'react-navigation'

import Login from 'App/Containers/Login/Login'
import TabNavigator from 'App/Containers/TabNavigator/TabNavigator'
import Profile from 'App/Containers/Profile/Profile'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { fadeIn, zoomIn, zoomOut } from 'react-navigation-transitions';



const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if (prevScene
    && prevScene.route.routeName === 'MainScreen'
    && nextScene.route.routeName === 'Login') {
      return fadeIn(2000);
  } 
}

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: {screen: SplashScreen},
    Login: {screen: Login},
    TabNavigator: {screen: TabNavigator},
    Profile: {screen: Profile},
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: SplashScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
    transitionConfig: (nav) => handleCustomTransition(nav)
  }
)

export default createAppContainer(StackNavigator)
