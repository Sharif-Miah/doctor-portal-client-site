import React from 'react';
import { useState } from 'react';
import AppointmentAvailable from './AppointmentAvailable';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {

    const [selectedTime, setSelectedTime] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
            />
            <AppointmentAvailable selectedTime={selectedTime} />
        </div>
    );
};

export default Appointment;