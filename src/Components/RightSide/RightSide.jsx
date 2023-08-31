import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
            <div>Customer Review</div>
        </div>
    </div>
  )
}

export default RightSide