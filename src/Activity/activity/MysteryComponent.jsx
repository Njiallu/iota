import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "../../IotaComponents/Carousel/CarouselDragAndDrop";

const Item = ({}) => {
  return <div>Tut</div>;
};

const MysteryComponent = ({
  ckey,
  savedData,
  setDataToUse,
  content,
  targetKey,
  actions,
}) => {
  return <Carousel ckey={ckey} content={content} setDataToUse={setDataToUse} />;
};

MysteryComponent.propTypes = {
  savedData: PropTypes.array,
  setDataToUse: PropTypes.func,
  targetKey: PropTypes.string,
  content: PropTypes.shape({}),
  actions: PropTypes.shape({}),
};
MysteryComponent.defaultProps = {
  savedData: [],
  setDataToUse: () => {},
  imagesArray: [],
  targetKey: "",
  actions: [],
};

export default MysteryComponent;
