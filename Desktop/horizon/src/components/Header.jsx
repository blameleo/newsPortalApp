import React from 'react'

const Header = () => {
  return (
    <div className="row nav">
            <div className="col-md-4 mt-2">
                <h1>
                   Horizon
                </h1>
            </div>
            <div className="col-md-4 mt-3 flags">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-end">
                        <img src="img/cam.png" alt=""/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="img/ng.png" alt=""/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-start">
                        <img src="img/gh.png" alt=""/>
                    </div>
                </div>

            </div>
            <div className="col-md-4 mt-3 d-flex justify-content-end fs-3 ">
                <p>About us </p>

            </div>
        </div>
  )
}

export default Header
