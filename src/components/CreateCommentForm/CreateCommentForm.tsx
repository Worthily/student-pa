import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { authReqActionCreator } from '../../store/saga/User/actions';
import send from '../../assets/img/send.png';
import { State } from '../../type';
import { createCommentReqActionCreator } from '../../store/saga/Comment/actions';

function CreateCommentForm(props: { postId: string }) {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const user = useSelector((state: State) => state.user);
  return (
    <Form
      onSubmit={(formObj: { text: string }) => {
        if (formObj.text) {
          if (formObj.text.trim() !== '') {
            dispatch(
              createCommentReqActionCreator({
                text: formObj.text,
                idUser: user.id,
                idPost: props.postId,
              }),
            );
            formObj.text = '';
          } else {
            setError('Заполните полe ввода');
            formObj.text = '';
          }
        } else {
          setError('Заполните полe ввода');
          formObj.text = '';
        }
      }}
      render={({ handleSubmit }) => (
        <div className="create-comment__form">
          <div className="create-comment__form-wrapper">
            <Field name="text">
              {({ input }) => (
                <input
                  placeholder="Оставить комментарий"
                  type="text"
                  className="create-comment__input"
                  {...input}
                />
              )}
            </Field>
            <button className="create-comment__button" onClick={handleSubmit}>
              <img
                src={send}
                alt="send"
                className="create-comment__button-img"
              />
            </button>
          </div>
          {error == '' ? (
            <></>
          ) : (
            <div className="create-comment__error">{error}</div>
          )}
        </div>
      )}
    />
  );
}

export default CreateCommentForm;
