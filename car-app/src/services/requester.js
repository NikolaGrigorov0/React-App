export const request = async (method, url, data, token) => {

    const options = {};
    options.method = method;

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }
    if(token){
      options.headers = {
        ...options.headers,
        'X-Authorization': token,
    };
    }

    const response = await fetch(url, options);

    try {
        if(!response.ok){
            throw new Error('Request is not ok!');
        }
      const result = await response.json();
      return result;

    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }

  };
  
  export const get = request.bind(null, 'GET');
  export const post = request.bind(null, 'POST');
  export const put = request.bind(null, 'PUT');
  export const del = request.bind(null, 'DELETE');