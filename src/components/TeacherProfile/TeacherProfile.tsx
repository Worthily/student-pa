import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, State } from '../../type';
import author from '../../assets/img/Avatar.png';
import userImg from '../../assets/img/Avatar.png';

function TeacherProfile(props: { id: string }) {
  const users = useSelector((state: State) => state.users);
  const user = users.find(item => item.id == props.id);

  const workload = useSelector((state: State) => state.workload);
  const group = useSelector((state: State) => state.group);
  const discipline = useSelector((state: State) => state.discipline);
  const userWorkload = workload.filter(item => item.teacherId == user?.id);

  const userTeachersItems = userWorkload.map(item => {
    const itemGroup = group.find(grp => item.groupId == grp.id);
    const itemDiscipline = discipline.find(
      disc => item.disciplineId == disc.id,
    );
    return (
      <div key={item?.id} className="profile__info-workload-item">
        <div className="profile__info-workload-item-group">
          Группа: {itemGroup?.value}
        </div>
        <div className="profile__info-workload-item-disc">
          Дисциплина: {itemDiscipline?.value}
        </div>
      </div>
    );
  });

  return (
    <div className="profile">
      <div className="profile__head">
        <img src={userImg} alt="user" className="profile__head-img" />
        <div className="profile__head-text">
          <div className="profile__head-name">{user?.name}</div>
          <div className="profile__head-group">Учитель</div>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__info-workload">
          <div className="profile__info-workload-text">Нагрузка</div>
          {userTeachersItems}
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
