import ProjectCard from '../components/ProjectCard'
import projects from '../projectsData'
import {useState} from 'react'

export default function HomePage({setPage, filter, setFilter}) {
    const filterItems = [
      { key: "all", label: "/all projects/" },
      { key: "fullstack", label: "full stack" },
      { key: "hardware", label: "hardware" },
      { key: "gamedev", label: "game dev" },
      { key: "design", label: "design" },
    ]

    return (
        <div className="flex flex-row flex-grow pt-26">
          {/* Sidebar / Tabs */}
          <div className="hidden w-1/5 pt-17 md:flex justify-start">
            <ul className="fixed space-y-8">
              {filterItems.map((item) => (
                  <li
                    key={item.key}
                    onClick={() => setFilter(item.key)}
                    className={`
                      cursor-pointer 
                      hover:text-gray-400 
                      ${filter === item.key ? "italic" : ""}
                    `}
                  >
                    {item.label}
                  </li>
              ))}
              <h3>::</h3>
              <li className="hover:text-gray-300 cursor-pointer"><a href="https://docs.google.com/document/d/1L5rAidN643hqVp2lIfjJgqgKjx3iP93m-bVBR-K6_bE/edit?usp=sharing" target="_blank">resume</a></li>
              <li className="hover:text-gray-300 cursor-pointer"><a href="https://www.linkedin.com/in/natalia-linn/" target="_blank">linkedin</a></li>
              <li className="hover:text-gray-300 cursor-pointer"><a href="https://github.com/yoitsnatalia" target="_blank">github</a></li>
            </ul>
          </div>

          {/* Scrollable Content */}
          <div className="md:w-4/5 px-6 md:p-6 overflow-y-scroll">
            {projects.map((project, index) => {
              if (filter === 'all' || project.category === filter) {
                return (<ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  onClick={() => setPage(project.page)}
                />)
              }
            })}
          </div>
        </div>
    )
}