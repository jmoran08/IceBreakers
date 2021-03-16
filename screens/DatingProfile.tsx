import React, { Component, useState } from 'react'
import { Image, StyleSheet, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import logo from '../assets/images/icon.png'; 
import { colors, SocialIcon } from 'react-native-elements'

class DatingProfile extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible: boolean) => {
        this.setState({ modalVisible: visible });
    }

 render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex: 1}}>
          <View style={{top: 30, alignItems: 'center'}}>
            <Image source={logo} style={{ width: 150, height: 150, borderRadius: 150 / 2 }} /> 
            <Text style={styles.title}>Jen Moran</Text>
            <Text style={{color: '#888', fontSize: 18}}> 
              "Creative quote goes here."
            </Text>
          </View>
          <View style={{marginTop: 60, marginLeft: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}} >
              <SocialIcon
                //Social Icon using react-native-elements
                type="instagram"
                //Type of Social Icon}
              /><Text style={{fontSize: 20}}>Instagram:</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}} >
              <SocialIcon
                //Social Icon using react-native-elements
                type="facebook"
                //Type of Social Icon}
              /><Text style={{fontSize: 20}}>Facebook:</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}} >
              <SocialIcon
                //Social Icon using react-native-elements
                type="linkedin"
                //Type of Social Icon}
              /><Text style={{fontSize: 20}}>Linked In:</Text>
            </View>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {/*<EditScreenInfo path="/screens/TabTwoScreen.tsx" />*/}
        </View>
        </SafeAreaView>
    )
  }
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
})



export default DatingProfile;