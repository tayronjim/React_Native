import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const FlexDirectionBasics = ()=>{

    const [flexDirection, setFlexDirection] = useState();

    return(
        <PreviewLayout
        label="flexDirection"
        values={[
            {'label':'flexDirection','val':['column', 'row', 'row-reverse', 'column-reverse']},
            {'label':'direction','val':['ltr', 'rtl']},
            {'label':'justifyContent','val':[
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
              ]},
              {'label':'alignItems','val':['stretch', 'flex-start', 'flex-end', 'center', 'baseline']},
        ]}
        selectedValue={flexDirection}
        setSelectedValue={setFlexDirection}
        >
            <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
            <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
            <View style={[styles.box,{width: 'auto',minWidth: 50}, {backgroundColor: 'steelblue'}]} />
        </PreviewLayout>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
})=>{
    return(
        <View style={{padding:10, flex:1}}>
                {values.map(value=>(
                    <>
                    <Text style={styles.label}>{value.label}</Text>
                    <View style={styles.row}>
                    {value.val.map(val=>(
                        <TouchableOpacity
                        key={val}
                        onPress={()=>setSelectedValue(val)}
                        style={[styles.button, selectedValue === val && styles.selected]}
                        >
                            <Text
                            style={[styles.buttonLabel, selectedValue === val && styles.selectedLabel]}
                            >{val}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                    <View style={[styles.container, {[value.label]:selectedValue}]}>
                        {children}
                    </View>
                    </>
                ))}
        </View>
    );
};
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 18,
          height:300,
          backgroundColor: 'aliceblue',
        },
        box: {
          width: 50,
          height: 50,
        },
        row: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        button: {
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderRadius: 4,
          backgroundColor: 'oldlace',
          alignSelf: 'flex-start',
          marginHorizontal: '1%',
          marginBottom: 6,
          minWidth: '48%',
          textAlign: 'center',
        },
        selected: {
          backgroundColor: 'coral',
          borderWidth: 0,
        },
        buttonLabel: {
          fontSize: 12,
          fontWeight: '500',
          color: 'coral',
        },
        selectedLabel: {
          color: 'white',
        },
        label: {
          textAlign: 'center',
          marginBottom: 10,
          fontSize: 24,
        },
      });
