import React from 'react'
import { merge } from 'ramda'
import { Button } from 'antd-mobile'
import { bottomShadow } from 'common'
import Line  from './line'

const appIntroList = {
  xiaoying: {
    title:  '小赢卡贷',
    remark: '6万3秒极速放款，放款送手环',
    intros: [
      {
        title:   '小赢卡贷是什么',
        content: [
          '小赢卡贷是一款帮助年轻用户维护信用，快速还清信用卡账单，',
          '恢复信用额度的小额借贷产品，由小赢普惠荣誉出品。',
        ],
      },
      {
        title:   '小赢卡贷特点',
        content: [
          '独具授信快、审批快、放款快的特点,堪称信用卡充电宝，还款方式灵活。',
          '高额度：2000-60000，满足你的一切所需。',
          '低利率：月利率最低可至0.34%，维护信用更轻松。',
          '期限灵活：3-12个月等多种还款周期，灵活选择',
        ],
      },
    ],
    activities: [
      '通过通联钱包注册成为小赢卡贷用户，申请并成功放款5000元，即可免费领取通联手环一只。',
      '在您满足免费领取的条件后，通联钱包客服将致电用户确认手环配送地址，手环将于30个工作日内统一进行配送。',
    ],
  },
  huanbei: {

  },
}

export default (
  ({ params }) => {
    const { type } = params
    const { title, remark, intros, activities } = appIntroList[type]
    return (
      <div>
        <div style={ merge(bottomShadow, { padding: '.32rem' }) } className='bg-white'>
          <div className='font-m blod pdv2'>{ title }</div>
          <div className='gray-1 font-ss pdv2'>{ remark }</div>
          {
            intros.map(({ title: introTitle, content }) => (
              <div key={ Math.random() }>
                <div className='font-m gray-1 pdv2'>{ introTitle }</div>
                <ul>
                  {
                    content.map(o => (<li key={ Math.random() } className='font-ss pdv2 gray-1'>{ o }</li>))
                  }
                </ul>
              </div>
            ))
          }
          <Line />
          <div className='font-m pdv2'>活动内容：</div>
          {
            activities.map(activity => (<div className='font-ss gray-1 pdv2' key={ Math.random() }>{ activity }</div>))
          }
        </div>
        <div style={{ height: '1.5rem', padding: '.32rem .64rem' }}>
          <Button type='primary'>立即申请</Button>
        </div>
      </div>
    )
  }
)
