import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestmonialReview from './TestmonialReview/TestmonialReview';

const Testimonial = () => {

    const parinetsReview = [

        {
            id: 1,
            name: 'Winson Herry',
            place: 'California',
            content: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            id: 2,
            name: 'Winson Herry',
            place: 'California',
            content: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            id: 3,
            name: 'Winson Herry',
            place: 'California',
            content: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },

    ]

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary font-bold text-xl '>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <figure>
                        <img src={quote} className="w-24 lg:w-44" alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    parinetsReview.map(review => <TestmonialReview key={review.id} review={review} />)

                }
            </div>
        </div>
    );
};

export default Testimonial;