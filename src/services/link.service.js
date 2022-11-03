import axios from 'axios';

const baseUrl = 'https://api.shrtco.de/v2';

export const postLink = async (link) => {
  try {
    const data = await axios.post(`${baseUrl}/shorten?url=${link}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
