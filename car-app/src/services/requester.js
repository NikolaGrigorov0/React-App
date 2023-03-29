export const request = async (method, url) => {

    const response = await fetch(url, {
      method,
    });

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