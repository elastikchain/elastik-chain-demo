import React from 'react'

type Props = {
  title: string;
  className?: any;
}

const Tab: React.FC<Props> = ({ children, className }) => {
  return <div>{children}</div>
}

export default Tab