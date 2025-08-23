import ClubHubSlides from "../components/ClubHubSlides"
export default function ClubHubPage({setPage}) {
    return (
        <div className="page">
            <div className="flex flex-row items-baseline justify-between mb-5">
                <h1>ClubHub</h1>
                <button className="back" onClick={() => setPage('home')}>back</button>
            </div>
            <h3 className="px-1 pb-1 text-3xl font-bold md:self-center">TreeHacks 2024</h3>
            <h3 className="px-1 pb-5 pt-3 md:text-xl self-center">Team: Natalia Linn, Bryce Kammerzell, Ben Friedman, & Daniel Yang</h3>
            <h3 className="px-1 pb-5 text-xl italic self-center">A one-stop shop for Stanford students to easily discover and join campus communities and events anytime, all year long.</h3>
            <ClubHubSlides/>
            <div className="flex justify-center md:mt-5">
                <a className="link mr-5 md:mr-10" href="https://devpost.com/software/clubhub-98zmpo" target="_blank">Devpost</a>
                <a className="link" href="https://github.com/UnknownEclipse/treehacks-2024" target="_blank">GitHub Repo</a>
            </div>   
        </div>
    )
}