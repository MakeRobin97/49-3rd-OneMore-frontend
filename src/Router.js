import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import ExerciseStart from './pages/ExerciseStart/ExerciseStart';
import NotHaveRoutine from './pages/NotHaveRoutine/NotHaveRoutine';
import MyCustomRoutine from './pages/MyRoutine/MyRoutine';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start/:id" element={<ExerciseStart />} />
            <Route path="/not-have-routine" element={<NotHaveRoutine />} />
            <Route path="/my-routine" element={<MyCustomRoutine />} />
          </Routes>
        </MainContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
