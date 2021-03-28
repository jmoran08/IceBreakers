import React, {Component} from 'react';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

import { StyleSheet, Button, ScrollView } from 'react-native';
import {ListItem} from 'react-native-elements';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import DatingProfileThumbnail  from './DatingProfileThumbnail';
import Settings from './Settings';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

export default function TabOneScreen() {
  const [firstName, setFirstName] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyAZYS4LyNkvnME6Sg7yOrzTo2PPKMfOujw",
    authDomain: "ice-breakers-8d1e8.firebaseapp.com",
    //databaseURL: 'https://ice-breakers-8d1e8firebaseio.com',
    projectId: "ice-breakers-8d1e8",
    storageBucket: "ice-breakers-8d1e8.appspot.com",
    messagingSenderId: "978108800382",
    appId: "1:978108800382:web:23be0378281cf6d240e72f",
    measurementId: "G-YZFFQ5SV85"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
      firebase.app(); // if already initialized, use that one
  }
  const db = firebase.firestore();

  //Jen Note 2/28 - For now this just sets the name to the last user retrieved, was just
  // trying to get db to work :)
  function fetchUsers() {
    db.collection('Users')
    .get()
    .then(snapshot => {
      snapshot
        .docs
        .forEach(doc => {
          setFirstName(doc.data().FirstName);
        });
    }).catch(err => {
      console.log('Error getting document', err);
    });
  }
  function displaySettings(){
    alert('hello');
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', width: `${100}%`}}>
      <Text style={styles.title}>{firstName}</Text>
      <Ionicons onPress={displaySettings} style={{marginLeft: 10}} name="md-settings" size={32} color="black" />
      </View>
      <Button
        onPress={fetchUsers}
        title="Get Users"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={{width: `${95}%`, height: `${50}%`, overflow: 'hidden', padding: 10, borderWidth: 1}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ width: `${100 * 3}%`}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled>
              <View style={{borderWidth: 2, width: `${32}%`, margin: 4}}>
                <DatingProfileThumbnail></DatingProfileThumbnail>
              </View>
            <View style={{borderWidth: 2, width: `${32}%`, margin: 4}}>
              <DatingProfileThumbnail></DatingProfileThumbnail>
            </View>
            <View style={{borderWidth: 2, width: `${32}%`, margin: 4}}>
              <DatingProfileThumbnail></DatingProfileThumbnail>
            </View>
        </ScrollView>
      </View>
        
      </View>
    
  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});



