import React, {useContext} from 'react';
import {Text, Pressable, Image, ScrollView} from 'react-native';
import {View} from '../components/view.division';
import {AppContext} from '../services/app.context';

export const Parts = ({navigation}) => {
  const {Storage} = useContext(AppContext);
  const PartName = ({name, data}) => {
    // console.log(data);
    return (
      <View padd={5}>
        <View
          width="80%"
          bcC="pink"
          fdr="row"
          padd={10}
          tblC="purple"
          touchable
          onpress={() =>
            navigation.navigate('target', {title: name, data: data})
          }
          borR="10"
          jus="space-between">
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              textTransformations: 'uppercase',
            }}>
            {name.toUpperCase()}
          </Text>
          <Image
            style={{height: 30, width: 30, transform: [{rotate: '180deg'}]}}
            source={require('../back.png')}
          />
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      {/* this is navigation of parts */}
      <View
        // height="50px"
        width="100%"
        elev="5"
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
            Parts
          </Text>
        </View>
        <View
          bcC="green"
          width="35px"
          jus="center"
          borR="10"
          ali="center"
          tofl
          onpress={() => navigation.navigate('Add Parts')}
          tblC="green"
          touchable>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#fff'}}>
            +
          </Text>
        </View>
      </View>
      {Storage.map(x => {
        return <PartName key={x.label} name={x.label} data={x} />;
      })}

      {/* from here items starts  */}
      <View width="100%" jus="center" ali="center" marT={20}>
        <View fdr="row" marT={40}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#16ed8d'}}>
              App By
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#16ed8d'}}>
              JEDA IT Solutions
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: 'grey'}}>
              Yakraj Pariyar || 7709543082
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
