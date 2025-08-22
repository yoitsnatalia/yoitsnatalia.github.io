import FigmaSlides from "../components/FigmaSlides"


export default function GemsPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Gems</h1>
                <h2 className="px-6 cursor-pointer hover:underline" onClick={() => setPage('home')}>back</h2>
            </div>
            <h3 className="px-1">slides to learn more // scroll for links</h3>
            <FigmaSlides />
            <div className="flex justify-center mt-5 ml-2">
                <button className="mr-10">Demo Gems!</button>
                <button>GitHub Repo</button>
            </div>   
        </div>
    )
}