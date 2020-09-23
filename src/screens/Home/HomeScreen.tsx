import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { RootStackScreenProps, ROUTES } from '@navigation';
import { Button } from '@components';
import styles from './styles';

type HomeScreenProps = RootStackScreenProps<ROUTES.Home> & {};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Button
          label="Login layout"
          onPress={() => {
            navigation.push(ROUTES.LoginLayout);
          }}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
