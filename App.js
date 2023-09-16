import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const userList = [
  {
    id: 1,
    name: 'Messi',
    profileImage: require('./assets/Messi.jpeg'),
    postImage: require('./assets/Messi.jpeg'),
    comment: 'messi',
    lno: '100'
  },
  {
    id: 2,
    name: 'Ronaldo',
    profileImage: require('./assets/Ronaldo.jpeg'),
    postImage: require('./assets/Ronaldo.jpeg'),
    comment: 'ronaldo',
    lno: '20'
  },
  {
    id: 3,
    name: 'Ragnar',
    profileImage: require('./assets/rag.jpeg'),
    postImage: require('./assets/rag.jpeg'),
    comment: 'ragnarrrr',
    lno: '1000'
  },
  {
    id: 4,
    name: 'steven',
    profileImage: require('./assets/download1.jpeg'),
    postImage: require('./assets/download1.jpeg'),
    comment: 'peaky blinders',
    lno: '870'
  },
  {
    id: 5,
    name: 'mohamed',
    profileImage: require('./assets/download.png'),
    postImage: require('./assets/download.png'),
    comment: 'thomas shelby',
    lno: '3000'
  },
];

export default function App() {
  const [isAddingPost, setIsAddingPost] = useState(false);

  const handleAddPost = () => {
    setIsAddingPost(!isAddingPost);
  };

  return (
    <View style={{ backgroundColor: '#0d0d0d', flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontStyle: 'italic',
            marginLeft: 10,
            fontWeight: '700',
          }}
        >
          Instagram
        </Text>
        <Icon
          name='message-square-outline'
          style={{ width: 30, height: 30, marginLeft: 235 }}
          fill='white'
        />
      </View>
      <ScrollView style={{ backgroundColor: '#0d0d0d', marginTop: 55 }}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar barStyle='light-content' />
          <View style={styles.container}>
            <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', marginLeft: 10 }}>
              <ScrollView horizontal={true}>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/download.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/rag.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/download.png')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/Messi.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/Ronaldo.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/Messi.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/Messi.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/Messi.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/rag.jpeg')}></Image>
                <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/rag.jpeg')}></Image>
              </ScrollView>
            </View>
            {userList.map((user) => (
              <View key={user.id} style={styles.instaComponent}>
                <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', marginLeft: 10 }}>
                </View>
                <View>
                  <View style={{ backgroundColor: 'grey', height: 0.2, width: '100%' }}></View>
                  <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={user.profileImage} />
                    <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>{user.name}</Text>
                    <Icon name='more-vertical-outline' style={{ width: 30, height: 30, marginLeft: 280 }} fill='white' />
                  </View>
                  <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={user.postImage}></Image>
                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill='white'></Icon>
                    <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill='white'></Icon>
                    <Icon name="share-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill='white'></Icon>
                    <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 230 }} fill='white'></Icon>
                  </View>
                  <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={user.profileImage}></Image>
                    <Text style={{ color: 'white', fontWeight: '600' }}>Liked By Ronaldo and {user.lno}</Text>
                  </View>
                  <View style={{ marginTop: 5, marginLeft: 10 }}>
                    <Text style={{ color: 'grey' }}>View all 10 comments </Text>
                  </View>
                  <View style={{ flexDirection: 'row', MarginTop: 5, MarginLeft: 12 }}>
                    <Text style={{ color: 'white', fontWeight: "800", marginLeft: 12 }}>Mina Morcos</Text>
                    <Text style={{ color: 'white', marginLeft: 10 }}>{user.comment}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/download1.jpeg')}></Image>
                    <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
                    <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
                  </View>
                  <View style={{ backgroundColor: 'grey', height: 0.3, width: "100%", marginTop: 10 }}></View>
                </View>
              </View>
            ))}
          </View>
        </ApplicationProvider>
      </ScrollView>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#0d0d0d',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            height: 50,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={handleAddPost}>
            <Icon name='plus-square-outline' style={{ width: 30, height: 30 }} fill='white' />
          </TouchableOpacity>
        </View>
      </ApplicationProvider>

      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={{
          flexDirection: "row", justifyContent: "space-between", alignItems: 'center'
          , backgroundColor: "#0d0d0d", position: 'absolute', left: 0, bottom: 0, right: 0, height: 50,
          paddingLeft: 20, paddingRight: 20
        }}>
          <Icon name='home-outline' style={{ width: 30, height: 30 }} fill='white'></Icon>
          <Icon name='search-outline' style={{ width: 30, height: 30 }} fill='white'></Icon>
          <Icon name='plus-square-outline' style={{ width: 30, height: 30 }} fill='white'></Icon>
          <Icon name='heart-outline' style={{ width: 30, height: 30 }} fill='white'></Icon>
          <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={require('./assets/Messi.jpeg')}></Image>
        </View>
      </ApplicationProvider>
    </View>
  );
}

const styles = StyleSheet.create({});

