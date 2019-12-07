import React from 'react'

class ProgressBar extends React.Component {

    render() {
        return (<>
            <h2 className="mb-4">
                Raised $ {this.props.raised} of <span className="text-muted">$ {this.props.goal}</span>
            </h2>
            <div className="progress">
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    55%
                </div>
            </div>
        </>)
    }
}

export default ProgressBar;