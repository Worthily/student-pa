import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, State } from '../../type';
import author from '../../assets/img/Avatar.png';
import userImg from '../../assets/img/Avatar.png';

function SudentProfile(props: { id: string }) {
  const users = useSelector((state: State) => state.users);
  const user = users.find(item => item.id == props.id);

  const group = useSelector((state: State) =>
    state.group.find(item => item.id == user?.groupId),
  );

  const workload = useSelector((state: State) => state.workload);
  const disciplines = useSelector((state: State) => state.discipline);
  const userWorkload = workload.filter(item => item.groupId == group?.id);

  const userDisciplinesID = userWorkload.map(item => item.disciplineId);
  const userTeachersID = userWorkload.map(item => item.teacherId);

  const userTeachers = userTeachersID.map(item => {
    return users.find(us => us.id == item);
  });

  const userDisciplines = userDisciplinesID.map(item => {
    return disciplines.find(disc => disc.id == item);
  });

  const userTeachersItems = userTeachers.map(item => {
    return (
      <div key={item?.id} className="profile__info-teachers-item">
        {item?.name}
      </div>
    );
  });

  const userDisciplineItems = userDisciplines.map(item => {
    return (
      <div key={item?.id} className="profile__info-disciplines-item">
        {item?.value}
      </div>
    );
  });

  return (
    <div className="profile">
      <div className="profile__head">
        <img src={userImg} alt="user" className="profile__head-img" />
        <div className="profile__head-text">
          <div className="profile__head-name">{user?.name}</div>
          <div className="profile__head-group">Группа: {group?.value}</div>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__info-teachers">
          <div className="profile__info-teachers-text">Преподаватели:</div>
          {userTeachersItems}
        </div>
        <div className="profile__info-disciplines">
          <div className="profile__info-disciplines-text">
            Изучает дисциплины:
          </div>
          {userDisciplineItems}
        </div>
      </div>
    </div>
  );
}

export default SudentProfile;
