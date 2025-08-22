import ProjectCard from '../components/ProjectCard'
import projects from '../projectsData'

export default function HomePage() {
    return (
        <div className="flex flex-row flex-grow pt-26">
          {/* Sidebar / Tabs */}
          <div className="w-1/5 pt-25 flex justify-start">
            <ul className="fixed space-y-8">
            <li className="hover:text-gray-300 cursor-pointer">all</li>
              <li className="hover:text-gray-300 cursor-pointer">full stack</li>
              <li className="hover:text-gray-300 cursor-pointer">hardware</li>
              <li className="hover:text-gray-300 cursor-pointer">game dev</li>
              <li className="hover:text-gray-300 cursor-pointer">design</li>
            </ul>
          </div>

          {/* Scrollable Content */}
          <div className="w-4/5 p-6 overflow-y-scroll">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
    )
}