import LifeIsGoodFigma from "../components/LifeIsGoodFigma"
export default function LifeIsGoodPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Life is Good</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold md:self-center">DESIGN 11</h3>
            <h3 className="px-1 pb-5 pt-3 md:text-xl self-center">Team: Natalia Linn, Atman Jahargirdar, Michelle Chen, Raghav Ramki</h3>
            <h3 className="px-1 pb-5 text-xl font-bold self-center">User plays as a plastic bag with options to either “rustle” or “lay.”</h3>
            <h3 className="px-1 pb-5 text-xl font-bold self-center">Depending on each choice, a different story will play out.</h3>
            <h3 className="px-1 pb-5 text-lg italic self-center">(ex. woven into a blanket for homeless shelter vs. drops into the ocean and threaten marine life).</h3>
            <h3 className="md:hidden px-1 text-sm">mobile: click on "Team 2" on figma embed to play</h3>
            <LifeIsGoodFigma/>
            <div className="flex justify-center md:mt-5">
                <a className="mr-5 md:mr-10" href="https://www.figma.com/design/1CxN6QrWnPwC91cf6pJ8Ks/Team-2?node-id=2472-1411&t=B0udEI4BVHbFuFrS-1" target="_blank">Figma</a>
            </div>   
        </div>
    )
}