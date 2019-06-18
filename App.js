import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import NotesList from './screens/NotesList';
import { Router, Scene } from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key="login"
        component={LoginScreen}
        title="login"
        initial/>

        <Scene key="notesList"
        component={NotesList}
        title="notesList" />
      </Scene>
    </Router>
  );
}
export default App;



// export default function App() {
//   console.log('asdfghjugfd');
//   return (
//     <View style={styles.container}>
//       <LoginScreen/>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {

//   render() {
//     const App = () => (
//       <Router>
//         <Stack key="root">
//           <Scene key="login" component={LoginScreen} title="Login"/>
//           <Scene key="register" component={NotesList} title="Register"/>
//         </Stack>
//       </Router>
//     );
//     return <LoginScreen />;
//   }
// }



