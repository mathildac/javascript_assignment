export function getStData() {
    return fetch('https://stryk.herokuapp.com/tipset')
    //ett get-anrop
  
        .then(function (response){
            return response.json()
        })
        .then(function (data) {
            return data.results;
        })
  }
//En funktion som med hjälp av fetch hämtar data från stryktipset