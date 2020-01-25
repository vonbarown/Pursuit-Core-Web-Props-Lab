import React from 'react'

const ProgressBar = (props) => {

    const percent = props.goal / props.raised
    return (<>
        <h2 className="mb-4">
            Raised $ {props.raised} of <span className="text-muted">$ {props.goal}</span>
        </h2>
        <div className="progress">
            <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${percent}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {parseInt(percent)}%
                </div>
        </div>
    </>)
}

export default ProgressBar;