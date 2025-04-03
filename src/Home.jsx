import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center">
                    <img
                        src="/textures/preFoto(43).jpg"
                        alt="Pré"
                        onClick={() => navigate("/j-a/Pre")}
                        className="w-40 md:w-60 cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
                    />
                    <h2 className="mt-2 text-lg font-semibold">Pré Wedding</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/textures/Foto(504).jpg"
                        alt="Casamento"
                        onClick={() => navigate("/j-a/Casamento")}
                        className="w-40 md:w-60 cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
                    />
                    <h2 className="mt-2 text-lg font-semibold">Casamento</h2>
                </div>
            </div>
            <button
                class="bg-transparent hover:bg-red-400 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={() => navigate("/j-a/gallery?category=nature")}
            >
                Todas as fotos
            </button>
        </div>
    )
}

export default Home;