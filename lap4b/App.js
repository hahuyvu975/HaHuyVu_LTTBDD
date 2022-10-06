import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      url: require('./assets/giacchuyen1.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
    {
      url: require('./assets/daucam1.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
    {
      url: require('./assets/daynguon1.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
    {
      url: require('./assets/dauchuyendoipsps21.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
    {
      url: require('./assets/dauchuyendoi1.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
    {
      url: require('./assets/carbusbtops21.png'),
      productName: 'Cáp chuyển từ Cổng USB sang PS2',
      starts: 4,
      previews: 15,
      price: 69.900,
    },
  ])
}
export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <FlatList
        style={{ marginTop: 5 }}
        data={products}
        numColumns={2}
        renderItem={({ item, index }) => <View style={{
          flex: 1,
          height: 200,
          marginLeft: index % 2 == 0 ? 10 : 0,
          marginTop: 5,
          marginRight: 10,
          marginBottom: 5,
          borderRadius: 20,
          borderColor: colors.inactive
        }}>
          <View style={{
            marginTop: 10,
          }}>
            <Image
              style={{
                width: 100,
                height: 100,
                marginRight: 15
              }} 
              source={{
                uri: item.uri
              }} />
      
          </View>
          <Text style={{
            color: 'black',
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
          }}>$ {item.productName}
          </Text>
        </View>}
      />

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
