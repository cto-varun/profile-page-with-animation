import React, { useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../../constants/config';
import { LogBox } from 'react-native';

const GooglePlacesInput = ({ style, borderBottomColor, onChangeText }) => {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        onChangeText(data?.description)
      }}
      onFail={(error) => console.error(error)}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      styles={{
        textInput: [style, {
          borderBottomWidth: 0,
        }],
        textInputContainer: [{
          borderBottomWidth: 2,
          borderBottomColor: borderBottomColor,
        }],
        container: {
          padding: 0
        }
      }}
    />
  );
};

export default GooglePlacesInput;