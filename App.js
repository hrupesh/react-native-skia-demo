import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SCREENS} from './StaticData';
import { DeclarativeAPI, Glassmorphism, ImageFilters, ImperativeAPI, Neumorphism } from './components';

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS[0]?.component);

  const handlePress = useCallback(
    selectedScreen => () => {
      setCurrentScreen(selectedScreen?.component);
    },
    [setCurrentScreen],
  );

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      onPress={handlePress(item)}
      style={{marginRight: 16}}>
      <Text>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0000'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SCREENS}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={{
            paddingHorizontal: 16,
          }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingRight: 16,
          }}
        />
      </View>
      {currentScreen}
    </SafeAreaView>
  );
};
