import React, { Component, useState } from 'react'
import { Image, StyleSheet, SafeAreaView, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import logo from '../assets/images/icon.png'; 
import { colors, SocialIcon } from 'react-native-elements'

export default function Settings() {


    const [value, setValue] = useState('jennifer_moran');
    const [isSelected, setIsSelected] = useState(false);

    const [isProfSelected, setIsProfSelected] = useState(false);

    const [isTravelSelected, setIsTravelSelected] = useState(false);

    function onChangeText(value: string){
        setValue(value);
    }

    function setSelected(){
        if(isSelected){
            setIsSelected(false);
        }
        else{
            setIsSelected(true);
        }
    }
    function setProfSelected(){
        if(isProfSelected){
            setIsProfSelected(false);
        }
        else{
            setIsProfSelected(true);
        }
    }
    function setTravelSelected(){
        if(isTravelSelected){
            setIsTravelSelected(false);
        }
        else{
            setIsTravelSelected(true);
        }
    }

    function saveSettings(){
        alert('save');
    }

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
        <View>
            <SocialIcon
                //Social Icon using react-native-elements
                type="facebook"
                //Type of Social Icon}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Facebook:</Text>
            <TextInput style={{ marginLeft: 10, height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => onChangeText}
            value={value}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Dating</Text>
            <CheckBox
                checked={isSelected}
                onPress={setSelected}
                style={styles.checkbox}
            />
            <Text>Professional</Text>
            <CheckBox
                checked={isProfSelected}
                onPress={setProfSelected}
                style={styles.checkbox}
            />
            <Text>Travel</Text>
            <CheckBox
                checked={isTravelSelected}
                onPress={setTravelSelected}
                style={styles.checkbox}
            />
            </View>
        </View>
        <View>
            <SocialIcon
                //Social Icon using react-native-elements
                type="instagram"
                //Type of Social Icon}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Instagram:</Text>
            <TextInput style={{ marginLeft: 10, height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => onChangeText}
            value={value}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Dating</Text>
            <CheckBox
                checked={isSelected}
                onPress={setSelected}
                style={styles.checkbox}
            />
            <Text>Professional</Text>
            <CheckBox
                checked={isProfSelected}
                onPress={setProfSelected}
                style={styles.checkbox}
            />
            <Text>Travel</Text>
            <CheckBox
                checked={isTravelSelected}
                onPress={setTravelSelected}
                style={styles.checkbox}
            />
            </View>
        </View>
        <View>
            <SocialIcon
                //Social Icon using react-native-elements
                type="linkedin"
                //Type of Social Icon}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Linked In:</Text>
            <TextInput style={{ marginLeft: 10, height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => onChangeText}
            value={value}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Dating</Text>
            <CheckBox
                checked={isSelected}
                onPress={setSelected}
                style={styles.checkbox}
            />
            <Text>Professional</Text>
            <CheckBox
                checked={isProfSelected}
                onPress={setProfSelected}
                style={styles.checkbox}
            />
            <Text>Travel</Text>
            <CheckBox
                checked={isTravelSelected}
                onPress={setTravelSelected}
                style={styles.checkbox}
            />
            </View>
        </View>
        <Button onPress={saveSettings}
        title="Save"
        color="#841584"
        accessibilityLabel="Save your settings"></Button>
        </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      checkbox: {
        alignSelf: "center",
        width: 20,
        height: 20
      }
})