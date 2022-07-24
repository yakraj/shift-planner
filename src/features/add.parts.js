import React, {useContext, useState} from 'react';
import {Text, Pressable, Image, TextInput, Alert} from 'react-native';
import {View} from '../components/view.division';
import {AppContext} from '../services/app.context';

export const AddParts = ({navigation}) => {
  const {Storage, setStorage} = useContext(AppContext);
  // console.log(set)
  const [partname, setpartname] = useState();
  // console.log(Storage);
  const InsertData = data => {
    setStorage([
      ...Storage,
      {
        value: partname,
        label: partname,
        Drillingtarget: 0,
        Drillingmc: 0,
        Drillingstock: 0,
        Roughertarget: 0,
        Roughermc: 0,
        Rougherstock: 0,
        Finishertarget: 0,
        Finisherstock: 0,
        Finishermc: 0,
        date: Date(),
      },
    ]);

    Alert.alert(
      'Success',
      'Successfully added your part name, Please setup target.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('target', {title: partname});
            setpartname('');
          },
        },
      ],
    );
  };
  return (
    <>
      <View padd="30">
        <TextInput
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            paddingLeft: 20,
            margin: 5,
            borderRadius: 7,
          }}
          autoCapitalize="characters"
          onChangeText={e => setpartname(e)}
          value={partname}
          placeholder="Type your Part Name."
          //   keyboardType="numeric"
        />

        <View
          marT="10"
          padd="10"
          borR={7}
          touchable
          tblC="blue"
          width="100%"
          onpress={() => {
            InsertData();
            // setpartname('');
          }}
          bcC="green">
          <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 6}}>
            INSERT
          </Text>
        </View>
      </View>
    </>
  );
};
