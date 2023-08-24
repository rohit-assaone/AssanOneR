import {configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import VehicleDetailsSlice from './redux/VehicleDetailsSlice';
import detailsOfCustomer from './redux/detailsOfCustomerSlice';
import inAppSlice from './redux/inAppSlice';

const store = configureStore({
    reducer: {
        user: authSlice,
        vehicleN : VehicleDetailsSlice,
        customerDetails: detailsOfCustomer,
        inApp: inAppSlice
    }
})


export default store;