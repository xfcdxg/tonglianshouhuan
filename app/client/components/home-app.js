import React           from 'react'
import { Flex }        from 'antd-mobile'
import { rem, indent } from 'common'

export default (
  ({ icon, name, remark, onClick }) => (
    <Flex { ...{ onClick } } >
      <img src={ icon } alt='' style={{ width: '1rem', marginRight: '.2rem' }} />
      <span>
        <span className='block font-xx' style={{ marginBottom: rem(indent) }}>{ name }</span>
        <span className='font-ss gray-1'>{ remark }</span>
      </span>
    </Flex>
  )
)
