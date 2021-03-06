import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { RootStackScreenProps, ROUTES } from '@navigation';
import { Button } from '@components';
import styles from './styles';

type HomeScreenProps = RootStackScreenProps<ROUTES.Home> & {};

const screens = Object.values(ROUTES);

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        {screens.map((screenName) => {
          if (screenName === ROUTES.Home) {
            return;
          }
          return (
            <Button
              key={screenName}
              label={screenName}
              onPress={() => {
                navigation.push(screenName);
              }}
              style={styles.button}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
