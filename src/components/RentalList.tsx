import RentalItem from './RentalItem';
import { useState } from 'react';

export default function RentalList() {
    const [rentalList] = useState([
        {
            id: 1,
            title: 'Cozy Lake House',
            area: 420,
            bathroom_count: 5,
            bedroom_count: 6,
            description: 'This house is perfect to be with family and have fun',
            location: {
                address: 'Marietta St, 4, New York',
                latitude: 56.232342,
                longitude: -23.889424,
            },
            weekly_price: 3800,
            pictures: [
                'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                'https://images.unsplash.com/photo-1621571113981-f51bde2a125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
            ],
            rating: 4.5,
            review_count: 18,
            is_new: true,
            is_premium: true,
        },
        {
            id: 2,
            title: 'Cottage in the Swiss mountains',
            area: 129,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Amazing house to relax and enjoy the snowy view.',
            location: {
                address: '3716 Kandergrund, Switzerland',
                latitude: 46.561807,
                longitude: 7.646569,
            },
            weekly_price: 2800,
            pictures: [
                'https://images.unsplash.com/photo-1567607351039-460841f82915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            ],
            rating: 5,
            review_count: 18,
            is_new: false,
            is_premium: true,
        },
        {
            id: 3,
            title: 'Downtown modern house',
            area: 78,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1900,
            location: {
                address: '12 Flowers Blvd, Chicago',
                latitude: 41.933392,
                longitude: -87.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 5,
            review_count: 33,
            is_new: false,
            is_premium: false,
        },
        {
            id: 4,
            title: 'Wooden house in the suburbs',
            area: 104,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1300,
            location: {
                address: '3 Marblehead, Massachusets',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 3,
            review_count: 12,
            is_new: true,
            is_premium: false,
        },
    ]);

    return (
        <div className="pt-16 px-8 sm:px-12 mx-auto">
            <div className="text-center sm:text-left">
                <h1 className="text-4xl font-semibold">Our rentals</h1>
                <p>
                    List of curated places for you to relax and enjoy the best
                    of life.
                </p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {rentalList.map((rental) => {
                    return <RentalItem data={rental} key={rental.id} />;
                })}
            </div>
        </div>
    );
}
