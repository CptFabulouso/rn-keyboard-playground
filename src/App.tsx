import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </>
  );
};

export default App;
