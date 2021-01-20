import React from 'react';
import Responsive from './common/Responsive';
import EditorContainer from './write/EditorContainer';
import TagBoxContainer from './write/TagBoxContainer';
import WriteActionButtonsContainer from './write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;