import React from 'react';
import { withRouter } from 'react-router';
 
class Detail extends React.Component {
  handleToAboutPage = () => {
    this.props.history.push('/about')
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleToAboutPage}>
          aboutページへ
        </button>
      </div>
    )
  }
}
 
export default withRouter(Detail)