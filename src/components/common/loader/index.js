import React from 'react'
import {Consumer as LocalConsumer} from '../../../context/localization'

const Loader = () => {
  return <h3>
          <LocalConsumer>
            {(value)=>value.loaderTitle}
          </LocalConsumer>
         </h3>
}

export default Loader
