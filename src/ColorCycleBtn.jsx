import React, { useState } from 'react'

const ColorCycleBtn = ({ colors }) => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0)
    const handleClick = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }
    return (
        <div className='color-btn'>
            <button onClick={handleClick} style={{ backgroundColor: colors[currentColorIndex] }}>Change Color</button>
        </div>
    )
}

export default ColorCycleBtn
