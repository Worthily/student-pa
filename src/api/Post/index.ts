import { apiAlt } from '..';
import { CREATE_POST_LINK } from '../../type/constants';

export async function createPost(
  title: string,
  content: string,
  userId: number,
  image: any,
) {
  return await apiAlt
    .post(CREATE_POST_LINK, {
      title: `${title}`,
      content: content,
      userID: userId,
      image: image,
    })
    .catch(error => {
      return error;
    });
}
