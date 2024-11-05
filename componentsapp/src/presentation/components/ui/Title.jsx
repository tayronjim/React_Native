import React from "react";
import { Text, View } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Title = ({text, safe = false, white = false})=>{

    const top = useSafeAreaInsets();
    return(
        <View>
            <Text 
                style={
                    {
                        ...globalStyles.title, 
                        marginTop: safe ? top : 0,
                        marginBottom: 10,
                        color: white ? 'white' : colors.text
                    }
                }>{text}</Text>
        </View>
    )
}