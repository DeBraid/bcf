import rp from 'request-promise';

export const Bitcoin = {
  getAll () {
    console.log('getAll bitcoin prices!');
    const uri = 'https://api.coinmarketcap.com/v1/ticker/';
    const options = {
      uri,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
      .then((prices)=>{
        console.log('prices', prices[0]);
        return prices;
      })
      .catch((err) => {
        console.error(err);
      });
   
  }

}
