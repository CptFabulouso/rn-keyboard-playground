import { Modal } from 'react-native';
import React, { useState } from 'react';

import { Button, KeyboardAvoidingView } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';
import { ModalContent } from './KeyboardWithinModalScreen';

import styles from './styles';

type ModalScreenProps = RootStackScreenProps<ROUTES.KeyboardWrappingModal> & {};

const ModalScreen = ({}: ModalScreenProps) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} removeHeaderHeight>
      <Button label="show Modal" onPress={openModal} />
      <Modal visible={visible} transparent animationType="fade">
        <ModalContent onClose={closeModal} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ModalScreen;
