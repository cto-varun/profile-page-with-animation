import { PROFILE_SET_VALUES } from '../actions/types';
import { RegExps } from '../../common/components/FormBuilder/RegularExp';

const initialState = {

    // current values for profile
    values: {
        username: {
            value: 'John Smith',
            editable: false,
            inputKey: 'username',
            label: 'Name',
            validation: (txt) => {
                return txt.length > 0 ? true : false
            },
            error: false,
            errorMessage: 'Name is Required!!',
            indexToDisplay: 0,
        },
        address: {
            value: 'Dubai - United Arab Emirates',
            editable: false,
            isGoogleInput: true,
            inputKey: 'address',
            label: 'Address',
            validation: (txt) => {
                return txt.length > 0 ? true : false
            },
            error: false,
            errorMessage: 'Address is Required!!',
            indexToDisplay: 1,
        },
        mobile: {
            value: '+1 3399 48488',
            editable: false,
            inputKey: 'mobile',
            label: 'Mobile',
            validation: (txt) => {
                return txt.length > 0 ? true : false
            },
            error: false,
            errorMessage: 'Mobile is Required!!',
            inputProps: {
                keyboardType: 'phone-pad'
            },
            indexToDisplay: 2,
        },
        email: {
            value: 'testing@gmail.com',
            editable: false,
            inputKey: 'email',
            label: 'Email',
            inputProps: {
                autoCapitalize: 'none'
            },
            validation: (txt) => {
                return txt.match(RegExps['email']) ? true : false
            },
            error: false,
            errorMessage: 'Valid Email Required!!',
            indexToDisplay: 3,
        },
        password: {
            value: 'testing',
            editable: false,
            inputKey: 'password',
            label: 'Password',
            inputProps: {
                autoCapitalize: 'none',
                secureTextEntry: true
            },
            validation: (txt) => {
                return txt.length > 0 ? true : false
            },
            error: false,
            errorMessage: 'Password is Required!!',
            indexToDisplay: 4,
        }
    }
};

export default _ = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SET_VALUES:
            return {
                ...state,
                values: action.payload  // setting the values
            }
        default:
            return { ...state }
    }
};