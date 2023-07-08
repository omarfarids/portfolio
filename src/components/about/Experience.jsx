import React from 'react'
import experienceImg from '../../images/experience.png'
import { webDevelopingExperience } from '../../data/experience';

const Experience = () => {
    return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={experienceImg} className="rounded-lg w-96" alt="" />
			</div>

			<div className="card-info font-general-regular w-full sm:w-3/4 text-left">
              {webDevelopingExperience.map((job, index) => {
                return (
                  <div key={index}>
                    <div className="work-info mb-4 text-ternary-dark dark:text-ternary-light text-lg border-t-2 border-primary-light dark:border-secondary-dark">
                      <h5 className="work-place">
                        <a href={job.website} target="_blank" rel="noreferrer" className='underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'>
                          {job.companyName}
                        </a>
                      </h5>
                      <span className="work-title job-title">
                        {job.position}
                      </span>
                      <p className="work-period">{job.duration}</p>
                      <p className="work-description">{job.description}</p>
                      <p>{job.responsible.info}</p>
                      <p>
                        <ul>
                          {job.responsible.points.map((point, index) => {
                            return <li key={index}>{point}</li>;
                          })}
                        </ul>
                      </p>
                      <ul className="work-stack">
                        Tech stack:
                        <br />
                        {job.techStack.map((element, index) => {
                          return <li key={index}>{`#${element} `}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
		</div>
	);
}

export default Experience