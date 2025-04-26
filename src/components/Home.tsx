// src/components/Home.js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Register My Business"
        onPress={() => navigation.navigate('RegisterBusiness')}
        color="#fc8019"
      />
      <Button
        title="Find Near Me"
        onPress={() => navigation.navigate('FindNearMe')}
        color="#fc8019"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
});

export default Home;
