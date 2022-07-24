import React, {useContext} from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, Image} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {HR} from '../components/hr';
import {View} from '../components/view.division';
import {AppContext} from '../services/app.context';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Piechart = () => {
  const {Storage} = useContext(AppContext);
  const widthAndHeight = RFPercentage(35);
  const finisher = Storage.map(x => x.Finishertarget * x.Finishermc);
  const Parts = Storage.map(x => x.value);
  const PartsCount = Storage.map(x => x.Finishertarget * x.Finishermc);
  const sliceColor = [
    '#F44336',
    '#2196F3',
    '#16d5f4',
    '#4CAF50',
    '#FF9800',
    '#e6194b',
    '#3cb44b',
    '#ffe119',
    '#4363d8',
    '#f58231',
    '#911eb4',
    '#46f0f0',
    '#f032e6',
    '#bcf60c',
    '#fabebe',
    '#008080',
    '#e6beff',
    '#9a6324',
    '#fffac8',
    '#800000',
    '#aaffc3',
    '#808000',
    '#ffd8b1',
    '#000075',
    '#808080',
    '#ffffff',
    '#000000',
  ];
  return (
    <ScrollView style={{width: '100%', height: '200%'}}>
      <View jus="center" ali="center" width="100%">
        <View
          width="100%"
          Left="0"
          fwr="wrap"
          fdr="row"
          jus="space-around"
          //   width="80%"

          marT={30}
          marB={30}>
          {Parts.map((x, i) => {
            return (
              <View
                padd={RFPercentage(0.5)}
                borR="10"
                border="1px solid #80808046"
                marr={RFPercentage(0.2)}
                key={i}>
                <View
                  height={RFPercentage(1.5) + 'px'}
                  width={RFPercentage(1.5) + 'px'}
                  bcC={sliceColor[i]}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: RFPercentage(1.7),
                    color: 'grey',
                  }}>
                  {x.toUpperCase()}
                </Text>
                <Text style={{fontSize: RFPercentage(1.5), color: 'grey'}}>
                  {PartsCount[i]}
                </Text>
              </View>
            );
          })}
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={finisher}
          sliceColor={sliceColor}
        />
        <View marr={RFPercentage(4)}>
          <Text style={{fontWeight: 'bold', fontSize: RFPercentage(2.5)}}>
            FINISHER OUTPUT CHART
          </Text>
        </View>

        <View marT={RFPercentage(5)}>
          {/* company branding */}
          <View fdr="row">
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RFPercentage(2.5),
                  color: '#31c1e9',
                }}>
                DYNAMIC MEGA TECH ENGG.
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RFPercentage(1.7),
                  color: 'grey',
                }}>
                Anchor Head Report
              </Text>
            </View>
          </View>
          {/* our branding */}
          <View fdr="row" marT={40}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RFPercentage(2.5),
                  color: '#16ed8d',
                }}>
                App By
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RFPercentage(2),
                  color: '#16ed8d',
                }}>
                JEDA IT Solutions
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RFPercentage(1.6),
                  color: 'grey',
                }}>
                Yakraj Pariyar || 7709543082
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
