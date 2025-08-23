import GemsSlides from "../components/GemsSlides"


export default function GemsPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>Gems</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1">slides to learn more // scroll for links</h3>
            <GemsSlides />
            <div className="flex justify-center md:mt-5">
                <a className="mr-5 md:mr-10" href="https://gems16.netlify.app/login" target="_blank">Demo Gems</a>
                <a href="https://github.com/yoitsnatalia/gems" target="_blank">GitHub Repo</a>
            </div>   
        </div>
    )
}