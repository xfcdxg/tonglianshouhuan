import React from 'react'
import { indent, rem } from 'common'
import { Flex } from 'antd-mobile'

export default (
  ({ cardImg, title, contentList, tagImg, onClick }) => {
    const flexProps = {
      justify:   'between',
      align:     'start',
      className: 'font-x pdv',
      onClick,
    }
    return (
      <Flex { ...flexProps } >
        <img src={ cardImg } alt='' style={{ width: '2rem' }} />
        <span className='wp55' >
          <span className='blod font-x block' style={{ marginBottom: rem(indent) }}>
            { title }
          </span>
          <ul className='font-s gray-1'>
            { contentList.map(word => (<li key={ word }>{ word }</li>)) }
          </ul>
        </span>
        <img src={ tagImg } alt='' style={{ width: '.5rem' }} />
      </Flex>
    )
  }
)
