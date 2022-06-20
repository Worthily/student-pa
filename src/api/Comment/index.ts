import { api } from '..';
import { COMMENT_LINK } from '../../type/constants';

export async function getComments() {
  return await api.get(COMMENT_LINK).catch(error => {
    return error;
  });
}

export async function createComment(
  comment: string,
  userId: number,
  postId: number,
) {
  return await api
    .post(COMMENT_LINK, {
      comment: comment,
      userId: userId,
      postId: postId,
    })
    .catch(error => {
      return error;
    });
}
