import { apiAlt, api } from '..';
import { POST_LINK } from '../../type/constants';

export async function createPost(
  title: string,
  content: string,
  userId: number,
  image: any,
) {
  return await apiAlt
    .post(POST_LINK, {
      title: `${title}`,
      content: content,
      userID: userId,
      image: image,
    })
    .catch(error => {
      return error;
    });
}

export async function getPosts() {
  return await api.get(POST_LINK).catch(error => {
    return error;
  });
}
