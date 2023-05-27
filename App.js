import React from 'react';
import RNUssdDial from 'react-native-ussd-dial';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App = () => {
  const getDeviceName = async () => {
    // метод библиотеки должен с помощью `async-await` возвращать из нативного кода (Java, Obj-C) строковое значение модели девайса
    const deviceName = await RNUssdDial.getDeviceName();
    // выводим в консоль полученное значение модели девайса
    console.log('deviceName: ', deviceName);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.highlight}>App.js</Text>
        <Button
          onPress={getDeviceName} // при нажатии на кнопку происходит вызов функции getDeviceName
          title="get device name"
          color="#841584"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
