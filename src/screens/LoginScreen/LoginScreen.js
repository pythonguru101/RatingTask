import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../components/InputField';
import {
  KeyboardBehavior,
  storeData,
  valid_Email,
  verticalScale,
} from '../../config/helper';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import {APPROUTE} from '../../navigation/AppRoutes';
import Toast from 'react-native-simple-toast';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const verifyLoginData = () => {
    if (valid_Email(email)) {
      if (password.trim().length > 5) {
        login();
      } else {
        Toast.show('Password Must be 6 Char. Long', Toast.LONG);
      }
    } else {
      Toast.show('Please Enter Valid Email', Toast.LONG);
    }
  };

  const login = () => {
    setLoader(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoader(false);
        storeData('userId', res.user.uid);
        props.navigation.replace(APPROUTE.Home);
      })
      .catch(e => {
        console.log('ERROR: ', e);
        setLoader(false);
        Toast.show(e, Toast.LONG);
      });
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Login</Text>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/03/37/67/30/360_F_337673028_wZqTUA4lx1NuzIQZtfTVPbRnFcygY0hL.jpg',
            }}
            style={styles.loginLogo}
            resizeMode="contain"
          />
          <View>
            <InputField
              placeholder={'Enter Email'}
              Width={'90%'}
              BR={verticalScale(10)}
              multiLine={false}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <InputField
              secureTextEntry={true}
              placeholder={'Enter Password'}
              Width={'90%'}
              BR={verticalScale(10)}
              multiLine={false}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button
            title="Login"
            isLoading={loader}
            onPress={() => {
              verifyLoginData();
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
