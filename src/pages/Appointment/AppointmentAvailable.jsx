import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AppointmentAvailable = ({ selectedTime }) => {

    const [appointmentOption, setAppointmentOption] = useState([]);


    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])

    return (
        <div className='my-12'>
            <div>
                <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedTime, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOption.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} />)

                }
            </div>
        </div>
    );
};

export default AppointmentAvailable;