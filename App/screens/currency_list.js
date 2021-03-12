import React from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import { RowItem, RowSeparator } from "../components/row_item";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {}; //In case it doesn't exist

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.onChange) {
                  params.onChange(item);
                }
                navigation.pop()
              }}
              rightIcon={
                selected && ( //Checks if it is true and applies View if it is
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )

              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemseparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />

    </View>
  );
};

