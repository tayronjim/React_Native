// HomeScreen.js
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { AirPlaneIcon } from "../../icons/icons";
import { globalStyles } from "../../../config/theme/theme";
import { Title } from "../../components/ui/Title";
import { MenuItem } from "../../components/ui/MenuItem";

const animationMenuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
      },
      {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
      },
];

const menuItems = [
    {
      name: 'Pull to refresh',
      icon: 'refresh-outline',
      component: 'PullToRefreshScreen',
    },
    {
      name: 'Section List',
      icon: 'list-outline',
      component: 'CustomSectionListScreen',
    },
    {
      name: 'Modal',
      icon: 'copy-outline',
      component: 'ModalScreen',
    },
    {
      name: 'InfiniteScroll',
      icon: 'download-outline',
      component: 'InfiniteScrollScreen',
    },
    {
      name: 'Slides',
      icon: 'flower-outline',
      component: 'SlidesScreen',
    },
    {
      name: 'Themes',
      icon: 'flask-outline',
      component: 'ChangeThemeScreen',
    },
  ];

  const uiMenuItems = [
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
      },
      {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
      },
      {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen',
      },
  ];



const HomeScreen = () => {
    return (
        <View style={[globalStyles.mainContainer]}>
            <View style={[globalStyles.globalMargin]}>
                <ScrollView>
                    <Title text="Opciones del menu" />
                    {animationMenuItems.map((item,i)=>(
                        <MenuItem
                        key={i}
                        {...item}
                        isFirst={ i === 0 }
                        isLast = {i === animationMenuItems.length - 1}
                        />
                    ))}

                    <View style={{marginTop:30}} />
                    {menuItems.map((item,i)=>(
                        <MenuItem
                        key={i}
                        {...item}
                        isFirst={ i === 0 }
                        isLast = {i === menuItems.length - 1}
                        />
                    ))}

                    <View style={{marginTop:30}} />
                    {uiMenuItems.map((item,i)=>(
                        <MenuItem
                        key={i}
                        {...item}
                        isFirst={ i === 0 }
                        isLast = {i === uiMenuItems.length - 1}
                        />
                    ))}

                </ScrollView>
            </View>
        </View>
    );
};

export default HomeScreen;
