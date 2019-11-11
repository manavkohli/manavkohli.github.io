import React from 'react';
import LargeListItem from './LargeListItem'

const LargeList = (props) => (
  <div className='large-list'>
    {
      props.items.map((item) => {
        return (
          <LargeListItem
            onClick={props.onClick}
            content={item["label"]}
            smallText={item["year"]}
          />
        )

      })
    }
  </div>
)

export default LargeList
