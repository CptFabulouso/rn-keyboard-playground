import { View, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';

import {
  Button,
  Text,
  SimpleTextInput,
  KeyboardAvoidingView,
} from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

import styles from './styles';

type ModalScreenProps = RootStackScreenProps<ROUTES.KeyboardWithinModal> & {};

export const ModalContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <View style={styles.modalBackdrop}>
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
        <Button label="close" onPress={onClose} />
      </ScrollView>
    </View>
  );
};

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
      <Modal visible={visible} animationType="fade" transparent>
        <KeyboardAvoidingView style={styles.flex} removeHeaderHeight>
          <ModalContent onClose={closeModal} />
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default ModalScreen;
