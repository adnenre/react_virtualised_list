import React from "react";
import { List, ListRowRenderer, AutoSizer } from "react-virtualized";
import { useNavigate } from "react-router-dom";

// Sample data
const list: string[] = Array.from(
  { length: 1000 },
  (_, index) => `Item #${index}`
);

const VirtualizedList: React.FC = () => {
  const navigate = useNavigate();

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div
      key={key}
      style={style}
      onClick={() => navigate(`/item/${index}`)}
      className="item"
    >
      {list[index]}
    </div>
  );

  return (
    <AutoSizer>
      {({ width }) => (
        <List
          width={width}
          height={400}
          rowHeight={50} // Height of each row item
          rowCount={list.length} // Total number of items
          rowRenderer={rowRenderer} // Render method for each item
        />
      )}
    </AutoSizer>
  );
};

export default VirtualizedList;
