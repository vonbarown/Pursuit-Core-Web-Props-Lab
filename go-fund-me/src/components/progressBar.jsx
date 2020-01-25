import React from 'react'

const ProgressBar = (props) => {

    return (<>
        <h2 className="mb-4">
            Raised $ {props.raised} of <span className="text-muted">$ {props.goal}</span>
        </h2>
        <div className="progress">
            <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${props.percent}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {props.percent}%
                </div>
        </div>
    </>)
}

export default ProgressBar;