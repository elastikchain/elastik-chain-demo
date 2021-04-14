import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  className: any
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, className }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <div className="tabs-heading">
      <button onClick={onClick} className={className}>{title}</button>
    </div>
  )
}

export default TabTitle