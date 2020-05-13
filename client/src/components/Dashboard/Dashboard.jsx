import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'

class Dashboard extends Component {
    render () {
        return (
            <div>
                
            </div>
        )
    }
}


function mapStateToProps({ global }) {
    return { global }
}

export default (connect(mapStateToProps, actions)(Dashboard))