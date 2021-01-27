import * as React from 'react';
import { Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



export default SignInScreen;


function SignInScreen({navigation}){


  return (
<View style={styles.container}>
      <Text style={styles.titleText}>Enter your Details</Text>
        <TextInput
          keyboardType = 'email-address'
          placeholder='email'
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
       >
         <Button title="Sign in" style={styles.buttonText} onPress={()=> navigation.navigate('Home')
}/>
       </TouchableOpacity>
        
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});