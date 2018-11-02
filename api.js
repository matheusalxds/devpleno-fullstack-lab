const axios = require('axios');
const baseUrl = 'https://como-fazer-devpleno-mathe.firebaseio.com/';

const list = async (key) => {
  const content = await axios.get(baseUrl + key + '.json');
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
  await axios.delete(baseUrl + key + '/' + id + '.json');
  return true
};

const get = async (key, id) => {
  const content = await axios.get(`${baseUrl}/${key}/${id}.json`);
  return {
    id,
    ...content.data,
  }
};

const update = async (key, id, data) => {
  await axios.put(`${baseUrl}/${key}/${id}.json`, data);
  return true
};

const create = async (key, data) => {
  await axios.post(`${baseUrl}/${key}.json`, data);
  return true;
}

module.exports = {
  list, remove, get, update, create
};
