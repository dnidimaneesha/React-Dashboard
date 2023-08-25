import React from 'react'
import './Card.css'
import { cardsData } from '../../Data/Data'

const Cards = () => {
  return (
    <div className="Cards">
    {cardsData.map((card, id) => {
        return(
            <div className="parentContainer">
                <card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                />
            </div>
        )
    })}

    </div>
  )
}

export default Cards