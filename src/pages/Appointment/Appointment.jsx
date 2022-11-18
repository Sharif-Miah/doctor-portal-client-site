import React from 'react';
import { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {

    const [selectedTime, setSelectedTime] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
            />
        </div>
    );
};

export default Appointment;