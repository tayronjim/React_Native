import React from "react";
import { ScrollView, useColorScheme, View } from "react-native";

import {
    Colors,
    LearnMoreLinks,
  } from 'react-native/Libraries/NewAppScreen';

export const LearnMore = ()=>{

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };

      return(
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <LearnMoreLinks />
        </View>
      </ScrollView>
)}