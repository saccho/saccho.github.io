import React from 'react'
import Experience from './Experience'
import education from '../data/values/education'

const Education: React.FC = () => {
  const educationList = []

  for(const i in education) {
    educationList.push(
      <Experience
        key={i}
        date={education[i].date}
        name={education[i].name}
        status={education[i].status}
    />
    )
  }

  return(
    <div>
      {educationList}
    </div>
  )
}

export default Education
