import React, { Component } from 'react';

class Rodape extends Component {
  render() {
    return(
      <div className="d-flex align-items-center justify-content-between small">
        <div className="text-muted">Copyright © Your Website 2021</div>
        <div>
            <a href="#">Privacy Policy</a>
            ·
            <a href="#">Terms &amp; Conditions</a>
        </div>
    </div>

    )
    
  }
}

export default Rodape;

