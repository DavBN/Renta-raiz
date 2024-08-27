import { Transition } from "../Transition";
import { FaRegPaperPlane } from "react-icons/fa";

export function JoinCommunity() {
    return (
        <Transition className="grid items-center px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 bg-orange-500">
            <h3 className="max-w-lg text-4xl font-semibold text-white">Únete y descubre la magía de raíz</h3>
            <div className="mx-auto mt-5 md:max-auto">
                <button className="flex items-center justify-between py-5 text-white transition-all duration-100 bg-black rounded-lg px-7 w-fit hover:bg-black/70 ">
                  <FaRegPaperPlane/>
                  <span className="ml-3">Únete a nosotros</span>
                </button>
            </div>
        </Transition>
    )
}
