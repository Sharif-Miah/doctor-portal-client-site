import React from 'react';

const TestmonialReview = ({ review }) => {
    const { img, name, place, content } = review;
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="">
                    <div className="grid content-center gap-4">
                        <div className="p-6 rounded shadow-md dark:bg-gray-900">
                            <p>{content}</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <img src={img} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                <div>
                                    <p className="text-lg font-semibold">{name}</p>
                                    <p className="text-sm dark:text-gray-400">{place}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestmonialReview;