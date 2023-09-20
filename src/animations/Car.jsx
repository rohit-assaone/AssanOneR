import React from 'react'
import './car.css'
const Car = () => {
  return (
    <>
    <div className='whole-car'>
    <div class="car">
        <div class="car__top"></div>
        <div class="car__body">
        <div class="car__bulb"></div>
        <div class="car__bulb car__bulb--back"></div>
        <div class="car__center"></div>
    </div>
    <div class="car__wheels">
        <div class="car__wheel car__wheel--1">
        <div class="wheel__circle"></div>
        <div class="wheel__rect wheel__rect--1"></div>
        <div class="wheel__rect wheel__rect--2"></div>
        <div class="wheel__rect wheel__rect--3"></div>
        <div class="wheel__rect wheel__rect--4"></div>
        <div class="wheel__rect wheel__rect--5"></div>
        <div class="wheel__rect wheel__rect--6"></div>
    </div>
    <div class="car__wheel car__wheel--2">
        <div class="wheel__circle"></div>
        <div class="wheel__rect wheel__rect--1"></div>
        <div class="wheel__rect wheel__rect--2"></div>
        <div class="wheel__rect wheel__rect--3"></div>
        <div class="wheel__rect wheel__rect--4"></div>
        <div class="wheel__rect wheel__rect--5"></div>
        <div class="wheel__rect wheel__rect--6"></div>
        </div>
        </div>
    </div>
    </div>

</>
  )
}

export default Car