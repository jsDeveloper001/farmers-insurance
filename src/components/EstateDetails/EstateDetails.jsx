import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EstateDetails = () => {
    const Estates = useLoaderData()
    const id = useParams()
    const selectedEstate = Estates.find(Estate => Estate.id == id.estateId);
    const navigate = useNavigate()
    return (
        <div className='mt-10 px-5 md:px-14 flex justify-center'>
            <div>
                <img src={selectedEstate.image} alt="Banner Image" className="rounded-lg w-full" />
                <div className="mt-7">
                    <h1 className="font-bold text-xl lg:text-3xl">{selectedEstate.estate_title}</h1>
                    <div className="mt-5 flex gap-5 items-center">
                        <p className="font-bold">Status: {selectedEstate.status}</p>
                        <p className="font-bold">Price: {selectedEstate.price}</p>
                    </div>
                    <div className="mt-1 flex gap-5 items-center">
                        <p className="font-bold">Area: {selectedEstate.area}</p>
                        <p className="font-medium flex  gap-1 items-center"><FaLocationDot /> {selectedEstate.location}</p>
                    </div>
                    <div className="mt-5">
                        <span className='font-bold text-base'>Facilities:</span>
                        {
                            selectedEstate.facilities.map((facility, idx) => <li className="ml-3" key={idx}>{facility}</li>)
                        }
                    </div>
                    <div className="mt-5">
                        <p className='text-[#131313B3] font-normal'><span className='font-bold text-black text-base'>Description: </span>{selectedEstate.description}</p>
                    </div>
                    <div className='flex gap-4 mt-7 mb-5'>
                        <button onClick={() => navigate(-1)} className='btn btn-secondary text-white text-base font-bold'>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;