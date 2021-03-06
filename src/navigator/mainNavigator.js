import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile184551Navigator from '../features/UserProfile184551/navigator';
import Tutorial184550Navigator from '../features/Tutorial184550/navigator';
import NotificationList184522Navigator from '../features/NotificationList184522/navigator';
import Settings184521Navigator from '../features/Settings184521/navigator';
import Settings184513Navigator from '../features/Settings184513/navigator';
import UserProfile184511Navigator from '../features/UserProfile184511/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile184551: { screen: UserProfile184551Navigator },
Tutorial184550: { screen: Tutorial184550Navigator },
NotificationList184522: { screen: NotificationList184522Navigator },
Settings184521: { screen: Settings184521Navigator },
Settings184513: { screen: Settings184513Navigator },
UserProfile184511: { screen: UserProfile184511Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
