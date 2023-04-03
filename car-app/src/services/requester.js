export const request = async (method, url, data, token) => {

  const options = {};
  options.method = method;

  if (method !== 'GET') {
    options.body = JSON.stringify(data);
  }
  if (token) {
    options.headers = {
      ...options.headers,
      'X-Authorization': token,
    };
  }

  const response = await fetch(url, options);

  try {
    const result = await response.json();
    if (!response.ok) {
      if (response.status === 403) {
        result.error = 'Incorrect email or password'
      } else if (response.status === 409) {
        result.error = 'Username or Email is already taken';
      } else {
        throw new Error('Request is not ok!');
      }
    }
    return result;

  } catch (error) {
    throw new Error(`Request failed: ${error}`);
  }

};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');