import FigmaSlides from "../components/FigmaSlides"


export default function GemsPage() {
    return (
        <div className="flex flex-col mt-35 pt-15 px-40 pb-30 overflow-y-scroll bg-[#D7EEFE] rounded-xl">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Gems</h1>
                <h2 className="px-6">back</h2>
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