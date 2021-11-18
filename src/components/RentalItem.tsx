import { AiFillStar } from 'react-icons/ai';

interface RentalHouse {
    data: {
        id: number;
        title: string;
        description: string;
        area: number;
        bedroom_count: number;
        bathroom_count: number;
        pictures: string[];
        weekly_price: number;
        location: {
            address: string;
            latitude?: number;
            longitude?: number;
        };
        rating: number;
        review_count: number;
        is_new: boolean;
        is_premium: boolean;
    };
}

export default function RentalItem({ data }: RentalHouse) {
    let stars: any = [];
    for (let index = 1; index <= 5; index++) {
        stars.push(
            <AiFillStar
                key={index}
                className={
                    index <= data.rating ? 'text-blue-600' : 'text-gray-300'
                }
            />
        );
    }

    return (
        <div className="w-full mx-auto max-w-md">
            <div className="pb-2/3 relative">
                <div className="pt-4 absolute h-full w-full">
                    <img
                        src={data.pictures[0]}
                        alt="House"
                        className="h-full w-full object-cover object-center rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className="relative px-4 -mt-6">
                <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                    <a href={`/rental/${data.id}`}>
                        <div className="flex items-center truncate">
                            <p>
                                {data.is_new && (
                                    <span className="inline-block px-2  py-0.5 bg-blue-300 text-brand uppercase text-sm font-semibold tracking-wide rounded-full">
                                        New
                                    </span>
                                )}
                                {data.is_premium && (
                                    <span
                                        className={`${
                                            data.is_new && 'ml-1'
                                        } inline-block px-2 py-0.5 bg-yellow-300 text-yellow-800 uppercase text-sm font-semibold tracking-wide rounded-full`}
                                    >
                                        Premium
                                    </span>
                                )}
                            </p>
                            <p
                                className={`${
                                    (data.is_new || data.is_premium) && 'ml-2'
                                } uppercase font-semibold text-sm text-gray-500 tracking-wide`}
                            >
                                <span className="mr-1">
                                    {data.bathroom_count} Baths
                                </span>
                                &bull;
                                <span className="mx-1">
                                    {data.bedroom_count} Beds
                                </span>
                                &bull;
                                <span className="ml-1">{data.area} m²</span>
                            </p>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold leading-tight truncate">
                            {data.title}
                        </h1>
                        <p className="mt-1 truncate">{data.location.address}</p>

                        <div className="flex items-center justify-between">
                            <div className="">
                                <span className="font-medium text-lg text-gray-600">
                                    $
                                </span>
                                <span className="text-2xl font-bold">
                                    {data.weekly_price}
                                </span>
                                <span className="ml-1 font-medium text-sm text-gray-600">
                                    {'/ wk'}
                                </span>
                                {/* <span className="ml-1 px-1 text-red-500  font-bold rounded-lg text-sm tracking-tighter uppercase">
                            12% Off
                        </span> */}
                            </div>
                            <div className="mt-2 leading-3 text-right">
                                <span className="flex items-center justify-items-stretch text-xl text-brand-lighter font-bold">
                                    {stars}
                                    {/* <AiFillStar className="ml-auto" /> */}
                                    {/* <span>{data.rating}</span> */}
                                </span>
                                <span className="font-medium text-sm text-gray-600">
                                    {data.review_count} reviews
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
