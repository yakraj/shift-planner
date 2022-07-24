import React, {useState, useContext, useEffect} from 'react';
import {Text, Pressable, Image, TextInput, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

//
import {View} from './../components/view.division';
import {Picker} from '@react-native-picker/picker';
import {HR} from './../components/hr';
import {AppContext} from '../services/app.context';
import {Piechart} from './pie.chart';
export const Landing = ({navigation}) => {
  const {Storage, setStorage, partname, setPartname} = useContext(AppContext);

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [dropval, setDropval] = useState();
  // this is for stock column */
  const [selected, setSelected] = useState();
  const Mystock = Storage.find(x => x.value == selected);
  // this is for input areas

  // useEffect(() => {
  //   var newvall = Storage;
  //   var Dropdown = newvall.map(function (item) {
  //     Object.defineProperty(item, 'label', {
  //       value: item.id,
  //       writeable: true,
  //       enumerable: true,
  //     });
  //     Object.defineProperty(item, 'value', {
  //       value: item.id,
  //       writeable: true,
  //       enumerable: true,
  //     });
  //     delete item.id;
  //     delete item.Drillingtarget;
  //     delete item.Drillingstock;
  //     delete item.Roughertarget;
  //     delete item.Rougherstock;
  //     delete item.Finishertarget;
  //     delete item.Finisherstock;
  //     return item;
  //   });
  //   setDropval(Dropdown);
  // }, []);

  const DrillingCusEd = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Drillingstock: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };
  const RougherCusEd = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Rougherstock: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };
  const FinisherCusEd = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Finisherstock: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };

  const DrillingCusEdMc = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Drillingmc: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };
  const RougherCusEdMc = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Roughermc: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };

  const FinisherCusEdMc = data => {
    if (data > 0) {
      const sdata = Storage;
      const newState = sdata.map(obj => {
        // 👇️ if id equals 2, update country property
        // console.log(obj.value, selected);
        if (obj.value == selected) {
          return {
            ...obj,
            Finishermc: data,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      // console.log(newState);
      setStorage(newState);
    }
  };

  // this is header text
  const HeaderText = ({wid, text, hei, mc}) => {
    return (
      <Text
        style={{
          padding: 2,
          borderWidth: 1,
          borderColor: 'grey',
          width: wid,
          textAlign: 'center',
          fontWeight: 'bold',
          textAlignVertical: 'center',
          height: hei ? hei : 45,
        }}>
        {mc ? text.toString().substring(0, 5) : text}
      </Text>
    );
  };
  // this is awesome table
  const Table = () => {
    const [Drilinstock, setDrilinstock] = useState();
    const [Roughstock, setRoughstock] = useState();
    const [Finistock, setFinistock] = useState();
    const [DrilMc, setDrilMc] = useState();
    const [RougMc, setRougMc] = useState();
    const [FiniMc, setFiniMc] = useState();

    return (
      <>
        <HR />

        <ScrollView horizontal={true}>
          {/* columns will start from here  */}
          {/* date column */}
          <View>
            <HeaderText text="Date" wid={60} />
            <HeaderText
              text={Mystock.date.substring(0, 15)}
              hei={135}
              wid={60}
            />
          </View>
          {/* machines column */}
          <View>
            <HeaderText text="Machines" wid={120} />
            <HeaderText text="Drilling" wid={120} />
            <HeaderText text="Rougher" wid={120} />
            <HeaderText text="Finisher" wid={120} />
          </View>

          {/* stock column */}
          <View>
            <HeaderText text="Stock" wid={70} />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={
                Drilinstock
                  ? Drilinstock.toString()
                  : Mystock.Drillingstock.toString()
              }
              onChangeText={e => setDrilinstock(e)}
              onEndEditing={e => DrillingCusEd(Drilinstock)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 70,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={
                Roughstock
                  ? Roughstock.toString()
                  : Mystock.Rougherstock.toString()
              }
              onChangeText={e => setRoughstock(e)}
              onEndEditing={e => RougherCusEd(Roughstock)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 70,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={
                Finistock
                  ? Finistock.toString()
                  : Mystock.Finisherstock.toString()
              }
              onChangeText={e => setFinistock(e)}
              onEndEditing={e => FinisherCusEd(Finistock)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 70,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            {/* <HeaderText text={Mystock.Drillingstock} wid={70} />
              <HeaderText text={Mystock.Rougherstock} wid={70} />
              <HeaderText text={Mystock.Finisherstock} wid={70} /> */}
          </View>
          {/* runnable mc column */}
          <View>
            <HeaderText text="Runnable M/C" wid={80} />
            <HeaderText
              mc
              text={Mystock.Drillingstock / Mystock.Drillingtarget}
              wid={80}
            />
            <HeaderText
              mc
              text={Mystock.Rougherstock / Mystock.Roughertarget}
              wid={80}
            />
            <HeaderText
              mc
              text={Mystock.Finisherstock / Mystock.Finishertarget}
              wid={80}
            />
          </View>
          {/* today's running mc column */}
          <View>
            <HeaderText text="Today's Running M/C" wid={100} />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={DrilMc ? DrilMc.toString() : Mystock.Drillingmc.toString()}
              onChangeText={e => setDrilMc(e)}
              onEndEditing={e => DrillingCusEdMc(DrilMc)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 100,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={RougMc ? RougMc.toString() : Mystock.Roughermc.toString()}
              onChangeText={e => setRougMc(e)}
              onEndEditing={e => RougherCusEdMc(RougMc)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 100,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            <TextInput
              keyboardType="numeric"
              selectTextOnFocus={true}
              value={FiniMc ? FiniMc.toString() : Mystock.Finishermc.toString()}
              onChangeText={e => setFiniMc(e)}
              onEndEditing={e => FinisherCusEdMc(FiniMc)}
              style={{
                padding: 2,
                borderWidth: 1,
                backgroundColor: '#3eff002b',
                borderColor: 'green',
                width: 100,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'grey',
                textAlignVertical: 'center',
                height: 45,
              }}
            />
            {/* <HeaderText text={Mystock.Drillingmc} wid={100} />
              <HeaderText text={Mystock.Roughermc} wid={100} />
              <HeaderText text={Mystock.Finishermc} wid={100} />
             */}
          </View>
          {/* <View>
              
              </View> */}
          {/* output column */}
          <View>
            <HeaderText text="Output" wid={70} />
            <HeaderText
              text={Mystock.Drillingmc * Mystock.Drillingtarget}
              wid={70}
            />
            <HeaderText
              text={Mystock.Roughermc * Mystock.Roughertarget}
              wid={70}
            />
            <HeaderText
              text={Mystock.Finishermc * Mystock.Finishertarget}
              wid={70}
            />
          </View>
          {/* remaining from stock column */}
          <View>
            <HeaderText text="Remaining from Stock" wid={100} />
            <HeaderText
              text={
                Mystock.Drillingstock -
                Mystock.Drillingmc * Mystock.Drillingtarget
              }
              wid={100}
            />
            <HeaderText
              text={
                Mystock.Rougherstock - Mystock.Roughermc * Mystock.Roughertarget
              }
              wid={100}
            />
            <HeaderText
              text={
                Mystock.Finisherstock -
                Mystock.Finishermc * Mystock.Finishertarget
              }
              wid={100}
            />
          </View>
          {/* stock end of the shift column */}
          <View>
            <HeaderText text="Stock End of the shift" wid={90} />
            <HeaderText
              text={
                Mystock.Drillingstock -
                Mystock.Drillingmc * Mystock.Drillingtarget
              }
              wid={90}
            />
            <HeaderText
              text={
                Mystock.Rougherstock -
                Mystock.Roughermc * Mystock.Roughertarget +
                Mystock.Drillingmc * Mystock.Drillingtarget
              }
              wid={90}
            />
            <HeaderText
              text={
                Mystock.Finisherstock -
                Mystock.Finishermc * Mystock.Finishertarget +
                Mystock.Roughermc * Mystock.Roughertarget
              }
              wid={90}
            />
          </View>
          {/* next shift runnable mc column */}
          <View>
            <HeaderText text="Next Shift Runnable M/C" wid={110} />
            <HeaderText
              mc
              text={
                (Mystock.Drillingstock -
                  Mystock.Drillingmc * Mystock.Drillingtarget) /
                Mystock.Drillingtarget
              }
              wid={110}
            />
            <HeaderText
              mc
              text={
                (Mystock.Rougherstock -
                  Mystock.Roughermc * Mystock.Roughertarget +
                  Mystock.Drillingmc * Mystock.Drillingtarget) /
                Mystock.Roughertarget
              }
              wid={110}
            />
            <HeaderText
              mc
              text={
                (Mystock.Finisherstock -
                  Mystock.Finishermc * Mystock.Finishertarget +
                  Mystock.Roughermc * Mystock.Roughertarget) /
                Mystock.Finishertarget
              }
              wid={110}
            />
          </View>
        </ScrollView>
      </>
    );
  };

  const [punchingqty, setpunchingqty] = useState(0);
  const [drillingmc, setdrillingmc] = useState(0);
  const [roughermc, setroughermc] = useState(0);
  const [finishermc, setfinishermc] = useState(0);

  // Generating report

  const Generate = () => {
    const data = Storage;
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      // console.log(obj.value, selected);
      if (obj.value == selected) {
        // console.log('i found it');
        return {
          ...obj,
          Drillingstock: punchingqty
            ? Mystock.Drillingstock -
              Mystock.Drillingmc * Mystock.Drillingtarget +
              Number(punchingqty)
            : obj.Drillingstock,
          Rougherstock:
            Mystock.Rougherstock -
            Mystock.Roughermc * Mystock.Roughertarget +
            Mystock.Drillingmc * Mystock.Drillingtarget,
          Finisherstock:
            Mystock.Finisherstock -
            Mystock.Finishermc * Mystock.Finishertarget +
            Mystock.Roughermc * Mystock.Roughertarget,
          Drillingmc: drillingmc ? drillingmc : obj.Drillingmc,
          Roughermc: roughermc ? roughermc : obj.Roughermc,
          Finishermc: finishermc ? finishermc : obj.Finishermc,
          date: Date(),
        };
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    // console.log(newState);
    setStorage(newState);
  };

  useEffect(() => {
    Mystock &&
      setdrillingmc(
        (
          (Number(
            Mystock.Drillingstock - Mystock.Drillingmc * Mystock.Drillingtarget,
          ) +
            Number(punchingqty)) /
          Mystock.Drillingtarget
        )
          .toString()
          .substring(0, 5),
      );
  }, [punchingqty]);
  return (
    <>
      {/* this side for top navigation */}
      <View
        fdr="row"
        width="100%"
        padd={8}
        bcC="#FFFF"
        elev="5"
        jus="space-between"
        ali="center">
        <Dropdown
          style={{
            width: '85%',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 10,
            paddingLeft: 10,
          }}
          // style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={Storage}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Part to view data.' : '...'}
          searchPlaceholder="Search..."
          value={selected}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelected(item.value);
            // setValue(item.value);
            // setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <Image
          //     style={{height: 35, width: 35}}
          //     source={require('../setting.png')}
          //   />
          // )}
        />
        <View tofl onpress={() => navigation.navigate('parts')} touchable>
          <Image
            style={{height: 35, width: 35, marginRight: 5}}
            source={require('../setting.png')}
          />
        </View>
      </View>
      {selected && Mystock ? (
        <ScrollView>
          {/* now input section starts */}

          <View padd="15" ali="flex-start" width="100%">
            {/* input text area starts from here complicated */}

            {/*for punching  */}
            <>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Punching Quantity
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
                  onpress={() => setpunchingqty(Number(punchingqty) - 1)}
                  ali="center">
                  <Text
                    style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
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
                  onChangeText={e => {
                    setpunchingqty(e);
                  }}
                  value={punchingqty.toString()}
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
                  onpress={() => setpunchingqty(Number(punchingqty) + 1)}
                  jus="center"
                  borR="10"
                  tofl
                  ali="center">
                  <Text
                    style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
                    +
                  </Text>
                </View>
              </View>
            </>

            {/* for Drilling */}
            <>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Drilling Machines{' '}
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
                  <Text
                    style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
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
                  <Text
                    style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
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
                  <Text
                    style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
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
                  <Text
                    style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
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
                  <Text
                    style={{fontSize: 40, textAlign: 'center', marginTop: -10}}>
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
                  <Text
                    style={{fontSize: 30, textAlign: 'center', marginTop: -5}}>
                    +
                  </Text>
                </View>
              </View>
            </>
            {/* <InputArea
          Mystock={Mystock}
          val="punchingqty"
          set="setpunchingqty"
          title="Punching Quantity"
        />
        <InputArea Mystock={Mystock} title="Drilling Machines" />
        <InputArea Mystock={Mystock} title="Rougher Machines" />
        <InputArea Mystock={Mystock} title="Finisher Machines" />
      </View> */}
          </View>
          {/* this is generate report button */}
          <View>
            <View
              touchable
              onpress={() => Generate()}
              tblC="pink"
              width="50%"
              bcC="green"
              border="1px solid green"
              borR="10"
              marB="10"
              padd="10">
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Generate Report
              </Text>
            </View>
          </View>
          {/* here we will have table  */}
          <Table />
          <View jus="center" ali="center" marT={50}>
            <View fdr="row">
              <Image
                style={{width: 60, height: 60}}
                source={require('../dynamic.png')}
              />
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#31c1e9'}}>
                  DYNAMIC MEGA TECH ENGG.
                </Text>
                <Text style={{fontWeight: 'bold', color: 'grey'}}>
                  D-1 MIDC Sinnar, 422103{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Piechart />
        </View>
      )}
    </>
  );
};
