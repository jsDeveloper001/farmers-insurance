import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
    return (
        <div className="p-2 shadow-lg border rounded-xl">
            <div className="flex justify-center">
                <img src={estate.image} alt="thumbnail" className="rounded-lg h-[250px] w-full" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 border-b py-3">{estate.estate_title}</h2>
            <div className="flex flex-wrap gap-3 mt-4">
                <p className="bg-[#aad9e5] px-2 py-1 font-medium rounded-md">Area: {estate.area}</p>
                <p className="bg-[#aad9e5] px-2 py-1 font-medium rounded-md">Price: {estate.price}</p>
                <p className="bg-[#aad9e5] px-2 py-1 font-medium rounded-md">Status: {estate.status}</p>
                <p className="bg-[#aad9e5] px-2 py-1 font-medium rounded-md flex items-center"><FaLocationDot /> {estate.location}</p>
            </div>
            <Link to={`estate/${estate.id}`}><button className="btn w-full mt-5 btn-success">View Property</button></Link>
        </div>
    );
};

export default Estate;