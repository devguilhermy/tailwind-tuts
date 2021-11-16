import { useState } from 'react';

interface RentalHouse {
    title: string;
    description: string;
    area: number;
    bedroom_count: number;
    bathroom_count: number;
    pictures: string[];
    location: {
        address: string;
        latitude?: number;
        longitude?: number;
    };
    rating: number;
    review_count: number;
}

export default function Home() {
    const [apts, setApts] = useState<RentalHouse[]>([
        {
            title: 'Nice modern Lake House',
            area: 420,
            bathroom_count: 5,
            bedroom_count: 6,
            description: 'This house is perfect to be with family and have fun',
            location: {
                address: 'Marietta St, 4',
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
    ]);

    return <></>;
}
