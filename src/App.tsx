import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactsScreen from './screens/ContactsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProgressScreen from './screens/ProgressScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SpecialtyListScreen from './screens/SpecialtyListScreen';
import TeachingScreen from './screens/TeachingScreen';
import StudentMarksScreen from './screens/StudentMarksScreen';
import {
  HOME,
  ABOUTUS,
  SPECIALTYLIST,
  CONTACTS,
  PROGRESS,
  TEACHING,
  PROFILE,
  SIGNIN,
  SIGNUP,
  STUDENTPROGRESS,
  ANSWERSFORTASK,
  ADDNEWPOST,
} from './type/constants';
import AnswersForTaskScreen from './screens/AnswersForTaskScreen';
import AddNewPostScreen from './screens/AddNewPostScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<HomeScreen />} />
        <Route path={ABOUTUS} element={<AboutUsScreen />} />
        <Route path={SPECIALTYLIST} element={<SpecialtyListScreen />} />
        <Route path={CONTACTS} element={<ContactsScreen />} />
        <Route path={PROGRESS} element={<ProgressScreen />} />
        <Route path={TEACHING} element={<TeachingScreen />} />
        <Route path={`${PROFILE}/:id`} element={<ProfileScreen />} />
        <Route
          path={`${STUDENTPROGRESS}/discipline/:idDis/user/:idUser`}
          element={<StudentMarksScreen />}
        />
        <Route
          path={`${ANSWERSFORTASK}/task/:id`}
          element={<AnswersForTaskScreen />}
        />
        <Route path={ADDNEWPOST} element={<AddNewPostScreen />} />
        <Route path={PROFILE} element={<ProfileScreen />} />
        <Route path={SIGNIN} element={<SignInScreen />} />
        <Route path={SIGNUP} element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
