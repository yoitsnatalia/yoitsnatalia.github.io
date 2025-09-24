import EyeMechSlides from "../components/EyeMechSlides"

export default function CroptailsPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>EyeMech</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold self-center">3D-Printed Eye Animatronic</h3>
            <h3 className="px-1 pb-2 text-xl self-center">Tutorial Project + Personal Code</h3>
            <h3 className="px-1 pb-3 text-lg italic self-center ">Will Cogley's ε-Series Animatronic Eye Mechanism</h3>
            <h3 className="px-1 pb-2 text-xl self-center">Printed, built, and programmed.</h3>
            <h3 className="px-1 pb-2 text-lg self-center">3D printing, servos, raspberry pi pico, micropython, thonny</h3>
            <EyeMechSlides />
            <div className="flex justify-center md:mt-5">
                <a className="link" href="https://youtu.be/uzPisRAmo2s?si=lBkDNT6zcC2ETVUX" target="_blank">Tutorial</a>
            </div> 
        </div>
    )
}