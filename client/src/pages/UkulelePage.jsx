import UkuleleSlides from "../components/UkuleleSlides"

export default function UkulelePage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Ukulele</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold self-center">CS107E Final Project</h3>
            <h3 className="px-1 pb-5 text-xl self-center">Natalia Linn & Esha Gupta</h3>
            <h3 className="px-1 pb-5 text-xl italic self-center">World’s first electronic, bare-metal ukulele powered by a Raspberry Pi.</h3>
            <h3 className="px-1 pb-5 sm:text-xl self-center">- Stringless ukulele that uses button circuits as frets, an accelerometer to sense strumming patterns, and .wav file composition to output sound through an external speaker when the musician plays a note.</h3>
            <h3 className="px-1 pb-5 sm:text-xl self-center">- Replicated .wav composition by mixing .wav files, music theory, and C libraries to allow the user to play different notes and chords on the physical ukulele.</h3>
            <UkuleleSlides/>
        </div>
    )
}