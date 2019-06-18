import React, { Component } from 'react';
import { View, Text,ListView, FlatList, StyleSheet,TouchableHighlight,Image } from 'react-native';
import CustomRow from './CustomRow';
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    component: (
      <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
      >
        <Image source={require('/home/vasavi/Desktop/filled-delete-bin-icon-vector-260nw-1408550078.png')} style={{width: 30, height: 30}}  />
      </View>
    ),
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => {
      console.log("Delete Item");
    },
  },
];

const NotesList = ({ itemList }) => (
  // console.log('itemList------------',itemList);
  <View style={styles.container}>

       <FlatList
              data={[{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'},{title:'a',description:'b',image_url:'n'}]}
              renderItem={({ item }) => <Swipeout  right={swipeoutBtns} left={swipeoutBtns}>
              <View style={styles.swipeoutView}><CustomRow
                  title={item.title}
                  description={item.description}
                  image_url={item.image_url}
              />
              </View>
              </Swipeout>
              }
          />
    <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
  </View>
      

);

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default NotesList;


// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';
// import Swipeout from 'react-native-swipeout';

// // Buttons
// var swipeoutBtns = [
//   {
//     text: 'Button'
//   }
// ]

// export default class NotesList extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Swipeout right={swipeoutBtns}>
//           <View style={styles.swipeoutView}>
//             <Text>Swipe me left</Text>
//           </View>
//         </Swipeout>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   swipeoutView: {
//     height: 50,
//   }
// });
// //  export default NotesList;
