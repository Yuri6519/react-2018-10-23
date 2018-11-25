import React from 'react'
import {NavLink} from 'react-router-dom'
import {Consumer as LanguageConsumer} from '../../context/localization'

function getLocalNameForChildren(name, value){

//console.log(Object.entries(value))

  const arr = Object.entries(value).filter((itr) =>{
    return itr[0] === name
  })

  // console.log(arr)
  // console.log(arr[0][0])
  // console.log(arr[0][1])


  return arr[0][1]
}

function MenuItem({children, name, ...rest}){
    return(
        <div>
        <NavLink {...rest} activeStyle={{ color: 'red' }}>
          <LanguageConsumer>
          {(value) => {

            return  getLocalNameForChildren(name, value)

          }}

            {/* {children}             */}
          </LanguageConsumer>
        </NavLink>
      </div>

    )
}
export default MenuItem