import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedTime, setSelectedTime }) => {

    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-1/2 rounded-lg shadow-2xl " alt='' />
                    <div className='lg:mr-8'>
                        <DayPicker
                            mode="single"
                            selected={selectedTime}
                            onSelect={setSelectedTime}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;