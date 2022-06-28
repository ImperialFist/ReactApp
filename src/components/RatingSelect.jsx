import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"

export default function RatingSelect({select}) {

    const [selected, setSelected] = useState(10);
    //обработчик выбора радиобаттонов
    const handleChange = (e)=>{
        setSelected(Number(e.currentTarget.value));
        select(Number(e.currentTarget.value));
        
    }

  return (
    <ul className='rating'>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            {/* htmlFor - ссылается на ID элемента */}
            <input type="radio" id='num1' name='rating' value='1' onChange={handleChange} checked={selected ===1} />
            <label className='rating__label' htmlFor="num1">1</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num2' name='rating' value='2' onChange={handleChange} checked={selected ===2} />
            <label className='rating__label' htmlFor="num2">2</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num3' name='rating' value='3' onChange={handleChange} checked={selected ===3} />
            <label className='rating__label' htmlFor="num3">3</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num4' name='rating' value='4' onChange={handleChange} checked={selected ===4} />
            <label className='rating__label' htmlFor="num4">4</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num5' name='rating' value='5' onChange={handleChange} checked={selected ===5} />
            <label className='rating__label' htmlFor="num5">5</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num6' name='rating' value='6' onChange={handleChange} checked={selected ===6} />
            <label className='rating__label' htmlFor="num6">6</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num7' name='rating' value='7' onChange={handleChange} checked={selected ===7} />
            <label className='rating__label' htmlFor="num7">7</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num8' name='rating' value='8' onChange={handleChange} checked={selected ===8} />
            <label className='rating__label' htmlFor="num8">8</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num9' name='rating' value='9' onChange={handleChange} checked={selected ===9} />
            <label className='rating__label' htmlFor="num9">9</label>
        </motion.div>
        </li>
        <li className='rating__item'>
        <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
            <input type="radio" id='num10' name='rating' value='10' onChange={handleChange} checked={selected ===10} />
            <label className='rating__label' htmlFor="num10">10</label>
        </motion.div>
        </li>
        
    </ul>
  )
}
