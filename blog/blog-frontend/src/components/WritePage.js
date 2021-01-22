import React from 'react';
import Responsive from './common/Responsive';
import EditorContainer from './write/EditorContainer';
import TagBoxContainer from './write/TagBoxContainer';
import WriteActionButtonsContainer from './write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - SILVER GIS</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;