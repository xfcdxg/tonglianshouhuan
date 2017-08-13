import React           from 'react'
import { indent, rem } from 'common'
import { Flex }        from 'antd-mobile'
import Line            from './line'

export default (
  ({ icon, name, remark, className, children, style }) => (
    <div { ...{ style, className: 'bg-white pdh pdv' } } >
      <Flex className='font-x pdv' >
        <img src={ icon } alt='' style={{ width: '.5rem' }} />
        <span style={{ marginLeft: rem(indent) }}>{ name }</span>
        <span className={ className }>{ remark }</span>
      </Flex>
      <Line />
      { children }
    </div>
  )
)
