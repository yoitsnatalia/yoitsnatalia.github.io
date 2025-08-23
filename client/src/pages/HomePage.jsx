import ProjectCard from '../components/ProjectCard'
import projects from '../projectsData'
import {useState} from 'react'

export default function HomePage({setPage, filter, setFilter}) {

    return (
        <div className="flex flex-row flex-grow pt-26">
          {/* Sidebar / Tabs */}
          <div className="hidden w-1/5 pt-17 md:flex justify-start">
            <ul className="fixed space-y-8">
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setFilter('all')}>/all projects/</li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setFilter('fullstack')}>full stack</li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setFilter('hardware')}>hardware</li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setFilter('gamedev')}>game dev</li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setFilter('design')}>design</li>
              <h3>::</h3>
              <li className="hover:text-gray-300 cursor-pointer">resume</li>
              <li className="hover:text-gray-300 cursor-pointer">linkedin</li>
              <li className="hover:text-gray-300 cursor-pointer">github</li>
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