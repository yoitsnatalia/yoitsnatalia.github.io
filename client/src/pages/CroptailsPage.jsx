import CroptailsEmbed from "../components/CroptailsEmbed"

export default function CroptailsPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Croptails</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold self-center">2D Farming Game (GoDot)</h3>
            <h3 className="px-1 pb-2 text-xl self-center">Tutorial Project</h3>
            <h3 className="px-1 pb-3 text-lg italic self-center ">"How to Build a Complete 2D Farming Game an 8-Hour Tutorial Series - Godot 4.3 - All 25 Episodes" by Rapid Vectors (YouTube).</h3>
            <h3 className="px-1 pb-2 text-xl self-center">Developed a complete Stardew Valley–inspired 2D farming simulation by following a 25-episode tutorial series.</h3>
            <h3 className="px-1 pb-2 text-lg self-center">Godot scripting (GDScript), tilemaps, character & npc movement, animation systems, day/night cycles, inventory management, and save/load systems.</h3>
            <CroptailsEmbed/>
            <div className="flex justify-center md:mt-5">
                <a className="link mr-5 md:mr-10" href="https://yoitsnatalia.itch.io/croptails" target="_blank">Itch.io Page</a>
                <a className="link" href="https://youtu.be/it0lsREGdmc?si=HwpDNgWQamjdxmAF" target="_blank">Tutorial</a>
            </div> 
        </div>
    )
}