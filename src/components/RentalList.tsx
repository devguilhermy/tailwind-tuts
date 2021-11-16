import RentalItem from './RentalItem';
import { useState } from 'react';

export default function RentalList() {
    const [rentalList, setRentalList] = useState([
        {
            title: 'Nice modern Lake House',
            area: 420,
            bathroom_count: 5,
            bedroom_count: 6,
            description: 'This house is perfect to be with family and have fun',
            location: {
                address: 'Marietta St, 4, New York',
                latitude: 56.232342,
                longitude: -23.889424,
            },
            pictures: [
                'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                'https://images.unsplash.com/photo-1621571113981-f51bde2a125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
            ],
            rating: 4.5,
            review_count: 78,
        },
        {
            title: 'Cottage in the mountains',
            area: 129,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Amazing house to relax and enjoy the snowy view.',
            location: {
                address: '3716 Kandergrund, Switzerland',
                latitude: 46.561807,
                longitude: 7.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1567607351039-460841f82915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            ],
            rating: 5,
            review_count: 18,
        },
        {
            title: 'Downtown modern house',
            area: 78,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
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
        },
    ]);

    return (
        <div className="mt-4 p-5">
            <div className="text-center sm:text-left">
                <h1 className="text-3xl font-semibold">Premium rentals</h1>
                <p>List of curated places for you to relax and enjoy.</p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rentalList.map((rental) => {
                    return <RentalItem data={rental} />;
                })}
            </div>
        </div>
    );
}
