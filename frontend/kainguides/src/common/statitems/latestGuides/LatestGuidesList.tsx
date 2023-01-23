import React from 'react'
import SingleGuide from './SingleGuide'

type LatestGuidesListProps = {
  latestGuidesList : Array<any>,
}

const LatestGuidesList = ({latestGuidesList} : LatestGuidesListProps) => {
  return(
    <div>
      <h1 className='font-semibold text-3xl mb-4'>Lastest Guides</h1>
      {
        latestGuidesList.map(guide => <SingleGuide guide={guide}/>)
      }
    </div>
  )
}

export default LatestGuidesList;