import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "../../IotaComponents/Carousel/CarouselDragAndDrop";

const MysteryComponent = ({
  answers,
  setAnswers,
  content,
  targetKey,
  actions,
}) => {
  console.log("content", content);

  // Do some logic to save answers returned to this component

  return (
    <Carousel
      ckey={targetKey}
      content={content}
      savedData={answers}
      setDataToUse={(e) => {
        console.trace(e);
        if (e?.setNext) {
          setAnswers(e.answers);
        }
      }}
    />
  );
};

MysteryComponent.propTypes = {
  answers: PropTypes.array,
  setAnswers: PropTypes.func,
  targetKey: PropTypes.string,
  content: PropTypes.shape({}),
  actions: PropTypes.shape({}),
};
MysteryComponent.defaultProps = {
  savedData: [],
  setAnswers: () => {
    console.log("Not implemented");
  },
  targetKey: "",
  content: {},
  actions: {},
};

export default MysteryComponent;
