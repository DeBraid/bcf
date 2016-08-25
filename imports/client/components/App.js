import React from 'react';
import { connect } from 'react-apollo';

class App extends React.Component {
  render() {
    const {data} = this.props.Bitcoin;
    const textStyle = {
      color: 'blue',
      fontSize: '20px'
    };
    return (
      <div className="main-container">
        <h1>BTC Prices</h1>          
        <div>
          {_.map( data , ({ name, price_usd }, index) => {
            return (
              <div className="vendor" key={index}>
                <span style={textStyle}>
                  {name}: {price_usd}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    Bitcoin: {
      query: gql`{
        data {
         name
         price_usd
        }
      }
      `,
      forceFetch: true,
    }
  }
}

export default connect({mapQueriesToProps})(App);
