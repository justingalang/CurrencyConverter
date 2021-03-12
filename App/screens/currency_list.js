import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RowItem, RowSeperator } from "../components/row_item";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";

export default ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return (
            <RowItem
              title={item}
              onPress={() => {
                navigation.pop();
              }}
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeperatorComponent={() => <RowSeperator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />

    </View>
  );
};

