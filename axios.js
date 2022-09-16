const axios = {
    _fake(url, data) {
        return new Promise( (resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you` 
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: "we will prepare students for you"                        
                    }   
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12 
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21 
                    }
                } 
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1,5)*1000);
        });
    },

    post(url, data) {
        return this._fake(url, data);
    },
    get(url, data) {
       return this._fake(url, data);
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }