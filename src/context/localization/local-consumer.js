import React, { Component as ReactComponent } from 'react'
import { Consumer } from './local_context'

export default (Component) =>
  class Translater extends ReactComponent {

    translate = (dictionary) => (compName) => {

      // console.log('LanguageConsumer::translate::value',dictionary)
      // console.log('LanguageConsumer::translate::compName',compName)
      // console.log('LanguageConsumer::translate::keys',Object.keys(dictionary))
      // console.log('LanguageConsumer::translate::values',Object.values(dictionary))
      // console.log('LanguageConsumer::translate::entries',Object.entries(dictionary))

      const vl = Object.entries(dictionary).filter((itr) => itr[0] === compName)[0][1]
     // console.log('LanguageConsumer::translate::entries[i]',vl)

      return vl ? vl : compName
      
    }

    render() {

      console.log('LanguageConsumer::render::')

      return (
                <Consumer>
                  {(dictionary) => {
                    return(
                      <Component 
                        {...this.props} 
                        getTranslatedValue={this.translate(dictionary)}>
                      </Component>
                    )
                  }}
                </Consumer>
             )
    }
  }
