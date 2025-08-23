import AutomataSlides from "../components/AutomataSlides"
export default function AutomataPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Automata</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold italic md:self-center">Godzilla v. Ski Lodge</h3>
            <h3 className="px-1 pb-5 pt-3 md:text-xl md:self-center">Team: Natalia Linn, Winston Lee, Kailani Webb</h3>
            <h3 className="px-1 pb-5 md:text-xl md:self-center">DESIGN 11 Automata</h3>
            <AutomataSlides/>  
        </div>
    )
}