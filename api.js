const axios = require('axios');
const baseUrl = 'https://como-fazer-devpleno-mathe.firebaseio.com/';
const auth = 'G2RjHSJ4BQvDIk6OSjRGjWdbSKLa64s3z54fCsX3';

const list = async (key) => {
  const content = await axios.get(baseUrl + key + '.json?auth='+auth);
  if (content.data) {
    const objs = Object
      .keys(content.data)
      .map(key => {
        return {
          id: key,
          ...content.data[ key ]
        }
      });
    return objs
  }
  return []
};

const remove = async (key, id) => {
  await axios.delete(baseUrl + key + '/' + id + '.json?auth='+auth);
  return true
};

const get = async (key, id) => {
  const content = await axios.get(`${baseUrl}/${key}/${id}.json?auth=`+auth);
  return {
    id,
    ...content.data,
  }
};

const update = async (key, id, data) => {
  await axios.put(`${baseUrl}/${key}/${id}.json?auth=`+auth, data);
  return true
};

const create = async (key, data) => {
  await axios.post(`${baseUrl}/${key}.json?auth=`+auth, data);
  return true;
}

module.exports = {
  list, remove, get, update, create
};
