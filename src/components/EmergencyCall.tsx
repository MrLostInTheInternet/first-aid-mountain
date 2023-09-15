import React from 'react';
import { View, Button, Linking } from 'react-native';

const EmergencyCall = () => {
  const openPhoneDialer = () => {
    const phoneNumber = '118'; // Replace with the phone number you want to dial.
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url)
      .catch((error) => {
        console.error('Error opening phone dialer:', error);
      });
  };

  return (
    <View>
      <Button
        title="Dial Phone Number"
        onPress={openPhoneDialer}
      />
    </View>
  );
};

export default EmergencyCall;
