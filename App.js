/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landing} from './src/features/landing';
import {Target} from './src/features/target';
import {Parts} from './src/features/parts';
import {AddParts} from './src/features/add.parts';
import {AppProvider} from './src/services/app.context';
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="landing"
            component={Landing}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="parts"
            component={Parts}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="target"
            component={Target}
          />
          <Stack.Screen
            // options={{headerShown: false}}
            name="Add Parts"
            component={AddParts}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};
