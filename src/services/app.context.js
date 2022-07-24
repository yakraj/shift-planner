import React, {useState, createContext, useEffect, useContext} from 'react';
import {PixelRatio} from 'react-native';
export const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AppProvider = ({children}) => {
  const [myname, setmyname] = useState('yakraj pariyar');
  const [partname, setPartname] = useState(['19dp15', '19dp13', '12dp15']);
  const [Storage, setStorage] = useState([
    {
      value: '19DP15',
      date: 'Sat Jul 23 2022 20:45:33 GMT+0530 (IST)',
      label: '19DP15',
      Drillingtarget: 26,
      Drillingmc: 6,
      Drillingstock: 417,
      Roughertarget: 50,
      Roughermc: 4,
      Rougherstock: 437,
      Finishertarget: 100,
      Finisherstock: 325,
      Finishermc: 5,
    },
  ]);

  console.log(PixelRatio.get());
  // storing dta
  const StoreUserCrd = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@userinfo', jsonValue);
    } catch (e) {
      console.log('unable to store data', e);
    }
  };
  // retrieving data
  const RetrieveUser = async () => {
    const RestoreUserData = user => {
      setStorage(user);
      // user.username ? setSignedin(true) : null;
    };
    try {
      const jsonValue = await AsyncStorage.getItem('@userinfo');
      return jsonValue != null ? RestoreUserData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log('unable to retrieve data', e);
    }
  };

  useEffect(() => {
    RetrieveUser();
  }, []);
  useEffect(() => {
    StoreUserCrd(Storage);
  }, [Storage]);

  return (
    <AppContext.Provider
      value={{myname, partname, setPartname, Storage, setStorage}}>
      {children}
    </AppContext.Provider>
  );
};
