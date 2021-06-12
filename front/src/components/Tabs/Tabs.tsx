import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: ReactElement[];
  className?: string;
  defaultActiveKey?: string;
};

const Tabs: React.FC<Props> = ({ children, className, defaultActiveKey }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className={className}>
        {children.map((item, index) => {
         
          return (
            <TabTitle
              key={index}
              className={item.props.className}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </div>
      <div>{children[selectedTab]}</div>
    </div>
  );
};

export default Tabs;
