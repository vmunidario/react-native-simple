import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  logo: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formItem: {
    backgroundColor: '#eef',
    marginVertical: 5,
    borderRadius: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    elevation: 2
  },
  formIcon: {
    backgroundColor: '#eef',
    width: 40,
    textAlign: 'center'
  },
  formInput: {
  }
});