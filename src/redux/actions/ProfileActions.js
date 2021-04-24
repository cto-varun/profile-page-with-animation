import { PROFILE_SET_VALUES } from './types';

export const setValues = (values) => ({
    type: PROFILE_SET_VALUES,
    payload: values
})