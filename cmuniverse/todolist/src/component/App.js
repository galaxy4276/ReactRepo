import React from 'react';
import Layout from "./Layout";
import Input from "./Input";
import TodoLayout from "./TodoLayout";

// 최상단 컴포넌트
const App = () => {
  return (
    <Layout>
      <h1>TODOLIST</h1>
      <Input />
      <TodoLayout />
    </Layout>
  );
};

export default App;