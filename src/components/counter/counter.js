import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
//import { languageContect } from '../../context/localization'
import { LanguageConsumerObject} from '../../context/localization'

class Counter extends Component {
  render() {
    //const LanguageConsumer = languageContect.Consumer
    
    const btnTitle = this.props.getTranslatedValue('counterButtonTitle')

    //console.log('Counter::btnTitle',btnTitle)


    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.handleClick}>
          {btnTitle}
          
          {/* <LanguageConsumer>
            {(value) => value.counterButtonTitle}
          </LanguageConsumer> */}


        </button>
      </div>
    )
  }
  handleClick = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  countProp: state.count
})
const mapDispatchToProps = {
  increment: incrementActionCreator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageConsumerObject(Counter))
