import * as React from 'react';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from 'react';



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
  function fetchUsers(){
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{firstName}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button
        onPress={fetchUsers}
        title="Get Users"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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




