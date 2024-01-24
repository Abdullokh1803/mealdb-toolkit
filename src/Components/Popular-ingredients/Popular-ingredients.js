import React from 'react'
import s from './Popular-ingredients.module.css'

const PopularIngredients = (props) => {
    const {strIngredient} = props
  return (
    <div className={s.content_item}>
        <img src={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`} alt="" />
        <p>{strIngredient}</p>
    </div>
  )
}

export default PopularIngredients