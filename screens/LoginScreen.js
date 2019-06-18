import React, { Component } from 'react';
import { View, Text, Button,KeyboardAvoidingView ,TextInput,StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {

    
onLogin=()=> {
  const { username, password } = this.state;

  // Alert.alert('Credentials', `${username} + ${password}`);

    // const {navigate} = this.props.navigation;
    console.log('this.props----',this.props);
}

    // return (
    //   <View>
    //     <Text onPress={() => Actions.notesList()}> LoginScreen </Text>
    //       <Button
    //     title="Go to Jane's profile"
    //     onPress={() => 
    //       // console.log('Actions.state-----------',Actions.register(''))
    //       Actions.notesList()
    //         }
    //   />    
    //   </View>
    // );
    
    
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View>
        {/* <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        /> */}
        
        <Button
          title={'Login'}
          
          onPress={() => 
                  Actions.notesList()
                     }/>
        <Text style={{alignItems: 'center',marginTop:20,marginBottom:20}}>OR</Text>
        <Button style={{marginTop:30}}
          title={'SIGN In WITH GOOGLE'}
          
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
      </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
  horizontal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});


export default LoginScreen;
