import { useNavigate } from "react-router-dom"


export const Header = () => {
    const navigate = useNavigate()

    const navigato = (place) => navigate("/"+place)
    return <>
    <div className="bg-neutral-200 flex items-center text-blue-700 p-5">
        <div onClick={() => navigato('')} className="mr-5">Home</div>
        <div onClick={() => navigato('lecture')} className="mr-5">Schedule</div>
    </div>
    </>
}