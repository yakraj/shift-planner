import React, {useContext, useState} from 'react';
import {Text, Pressable, Image, TextInput, Alert} from 'react-native';
import {HR} from '../components/hr';
import {View} from '../components/view.division';
import {AppContext} from './../services/app.context';

export const Target = ({navigation, route}) => {
  const {Storage, setStorage} = useContext(AppContext);
  const {data} = route.params;

  const defaultval = Storage.find(x => x.value == route.params.title);

  const [drillingmc, setdrillingmc] = useState(defaultval.Drillingtarget);
  const [roughermc, setroughermc] = useState(defaultval.Roughertarget);
  const [finishermc, setfinishermc] = useState(defaultval.Finishertarget);
  const Update = () => {
    // console.log(route.params.name);
    const data = Storage;
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      // console.log(obj.value, selected);
      if (obj.value == route.params.title) {
        return {
          ...obj,
          Drillingtarget: drillingmc,
          Roughertarget: roughermc,
          Finishertarget: finishermc,
        };
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    // console.log(newState);
    setStorage(newState);

    Alert.alert('Updated Successfully', 'Go back to home.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('landing');
        },
      },
    ]);
  };
  return (
    <>
      <View
        // height="50px"
        elev="5"
        width="100%"
        bcC="#fff"
        padd="10"
        jus="space-between"
        ali="center"
        fdr="row">
        <View touchable onpress={() => navigation.goBack()} tofl fdr="row">
          <Image
            style={{height: 25, marginRight: 10, width: 25}}
            source={require('../back.png')}
          />
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
            {route.params.title.toUpperCase() + ' - ' + 'Target Quantity'}
          </Text>
        </View>
      </View>
      <View padd={20} ali="flex-start">
        {/* this is input section critical */}
        {/* for Drilling */}
        <>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Drilling Machines
          </Text>
          <HR />
          <View fdr="row">
            <View
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              jus="center"
              borR="10"
              tofl
              onpress={() => setdrillingmc(Number(drillingmc) - 1)}
              ali="center">
              <Text style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
                -
              </Text>
            </View>
            <TextInput
              selectTextOnFocus={true}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                margin: 5,
                color: 'grey',
                width: '30%',
                borderRadius: 10,
              }}
              onChangeText={e => setdrillingmc(e)}
              value={drillingmc.toString()}
              // placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <View
              ofl="hidden"
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              onpress={() => setdrillingmc(Number(drillingmc) + 1)}
              jus="center"
              borR="10"
              tofl
              ali="center">
              <Text style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
                +
              </Text>
            </View>
          </View>
        </>

        {/*  for Rougher machines */}
        <>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Rougher Machines
          </Text>
          <HR />
          <View fdr="row">
            <View
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              jus="center"
              borR="10"
              tofl
              onpress={() => setroughermc(Number(roughermc) - 1)}
              ali="center">
              <Text style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
                -
              </Text>
            </View>
            <TextInput
              selectTextOnFocus={true}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                margin: 5,
                color: 'grey',
                width: '30%',
                borderRadius: 10,
              }}
              onChangeText={e => setroughermc(e)}
              value={roughermc.toString()}
              // placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <View
              ofl="hidden"
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              onpress={() => setroughermc(Number(roughermc) + 1)}
              jus="center"
              borR="10"
              tofl
              ali="center">
              <Text style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
                +
              </Text>
            </View>
          </View>
        </>

        {/*  for finisher machines */}
        <>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Finisher Machines
          </Text>
          <HR />
          <View fdr="row">
            <View
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              jus="center"
              borR="10"
              tofl
              onpress={() => setfinishermc(Number(finishermc) - 1)}
              ali="center">
              <Text style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
                -
              </Text>
            </View>
            <TextInput
              selectTextOnFocus={true}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                margin: 5,
                color: 'grey',
                width: '30%',
                borderRadius: 10,
              }}
              onChangeText={e => setfinishermc(e)}
              value={finishermc.toString()}
              // placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <View
              ofl="hidden"
              touchable
              // tblC="green"
              border="1px solid grey"
              height="40px"
              width="40px"
              onpress={() => setfinishermc(Number(finishermc) + 1)}
              jus="center"
              borR="10"
              tofl
              ali="center">
              <Text style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
                +
              </Text>
            </View>
          </View>
        </>
      </View>
      <View>
        <View
          touchable
          onpress={() => Update()}
          tblC="pink"
          width="50%"
          bcC="green"
          border="1px solid green"
          borR="10"
          marB="10"
          padd="10">
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Update Report</Text>
        </View>
      </View>
    </>
  );
};
