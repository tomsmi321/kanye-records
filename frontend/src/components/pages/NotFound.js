import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        return (
            <div className="text-center" style={{ marginTop: '10rem' }}>
                <h3>Whoops <span>😕</span></h3>
                <h4>The page that you are looking for does not exist</h4>
            </div>
        )
    }
}

export default NotFound
