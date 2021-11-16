import { AiFillEye, AiFillStar } from 'react-icons/ai';

interface RentalHouse {
    data: {
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
    };
}

export default function RentalItem({ data }: RentalHouse) {
    let stars: any = [];
    for (let index = 1; index < data.rating; index++) {
        stars.push(<AiFillStar />);
    }

    return (
        <div className="w-full mx-auto max-w-md bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="px-4 pt-4">
                <img
                    src={data.pictures[0]}
                    alt="House"
                    className="h-64 w-full object-cover object-center rounded-lg"
                />
            </div>
            <div className="p-4">
                <p className="uppercase font-semibold text-sm text-gray-500 tracking-wide">
                    <span>{data.bathroom_count} Baths </span>
                    &bull;&nbsp;
                    <span>{data.bedroom_count} Beds</span>
                </p>
                <h1 className="text-xl font-semibold">{data.title}</h1>
                <p>{data.location.address}</p>
                <div className="flex items-center justify-between">
                    <div className="flex mt-2">
                        <span className="flex text-xl text-blue-800 font-bold">
                            {stars}
                        </span>
                        &nbsp;
                        <span className="font-medium">{data.review_count}</span>
                    </div>
                    <button className="btn btn-primary mt-2 px-2 py-1 flex items-center justify-between">
                        <AiFillEye className="mr-1" />
                        Ver
                    </button>
                </div>
            </div>
        </div>
    );
}
