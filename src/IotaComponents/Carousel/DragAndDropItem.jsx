import React from "react";
import PropTypes from "prop-types";
import ImageItem from "./ImageItem";
import { DropInfoTarget } from "../Molecules/DragDropSimple";

const DragAndDropItem = ({
  ckey,
  source,
  alt,
  id,
  selected,
  canDl,
  download,
  onDownload,
  targetKeys,
  onDrop,
  targetDropped,
}) => {
  return (
    <div
      key={`DragAndDropItem_${ckey}`}
      className="col-flex-between"
      style={{ height: "100%" }}
    >
      <ImageItem
        ckey={`${ckey}_image`}
        source={source}
        alt={alt}
        selected={selected}
        download={download}
        onDownload={onDownload}
        canDl={canDl}
      />
      <div className="row-flex-centered mt-4" style={{ width: "100%" }}>
        {targetKeys?.map((target, index) => (
          <DropInfoTarget
            key={index}
            ckey={`${ckey}_${index}`}
            targetKey={target.key}
            defaultvalue={
              targetDropped && targetDropped[target.key]
                ? targetDropped[target.key]
                : target.placeHolder
            }
            setValue={(e) => onDrop(e, target.key, id)}
          />
        ))}
      </div>
    </div>
  );
};

// These are not the right props
DragAndDropItem.propTypes = {
  ckey: PropTypes.string,
  arrayOfInput: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    })
  ),
  itemNb: PropTypes.number,
  setArrayOfInput: PropTypes.func,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    })
  ),
  download: PropTypes.bool,
  onDownload: PropTypes.func,
  targetKeys: PropTypes.arrayOf(PropTypes.shape()), // Choice which input is activate ( title | author )
  disabled: PropTypes.bool,
};

DragAndDropItem.defaultProps = {
  ckey: "DragAndDropItem",
  arrayOfInput: [
    {
      title: "no input",
      author: "no input",
    },
  ],
  itemNb: 3,
  setArrayOfInput: (el) => console.log("set Array of input not setup", el),
  itemArray: [
    {
      title: "no input",
      author: "no input",
    },
  ],
  targetKeys: [],
};

export default DragAndDropItem;
