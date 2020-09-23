import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#b5EAD7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  topView: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputsWrapper: {
    flexDirection: 'row',
  },

  inputsContainer: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 5,
    flex: 1,
    maxWidth: 500,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    marginBottom: 10,
  },
});
