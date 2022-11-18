import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedTime, setSelectedTime }) => {

    let footer = <p>Please pick a day.</p>;
    if (selectedTime) {
        footer = <p>You picked {format(selectedTime, 'PP')}.</p>;
    }

    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedTime}
                            onSelect={setSelectedTime}
                            footer={footer}
                        />
                    </div>
                    <p>You have picked {format(selectedTime, 'PP')}</p>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;