import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

import {
  Button,
  Text,
  SimpleTextInput,
  KeyboardAvoidingView,
} from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

import styles from './styles';

type ModalScreenProps = RootStackScreenProps<ROUTES.KeyboardWithinModal> & {};

const ModalScreen = ({}: ModalScreenProps) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button label="show Modal" onPress={openModal} />
      <Modal isVisible={visible}>
        <KeyboardAvoidingView style={styles.rnModalContent} removeHeaderHeight>
          <ScrollView
            style={styles.modalContent}
            contentContainerStyle={styles.content}
          >
            <View style={styles.inputsWrapper}>
              <View style={styles.inputsContainer}>
                <Text style={styles.title}>Login</Text>
                <SimpleTextInput
                  placeholder="email"
                  label="Email"
                  style={styles.input}
                />
                <SimpleTextInput placeholder="password" label="Password" />
              </View>
            </View>
            <Button label="close" onPress={closeModal} />
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default ModalScreen;
