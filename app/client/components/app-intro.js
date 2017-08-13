import React from 'react'
import { merge } from 'ramda'
import { Flex } from 'antd-mobile'
import { bottomShadow } from 'common'
import bannerXiaoying from 'images/banner_xiaoying.png'
import bannerHuanbei from 'images/banner_huanbei.png'
import Line  from './line'

const appIntroList = {
  xiaoying: {
    banner: bannerXiaoying,
    title:  '小赢卡贷',
    remark: '6万3秒极速放款，放款送手环',
    intros: [
      {
        title:   '小赢卡贷是什么？',
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
    onClick: () => (location.href = 'https://cardloan.xiaoying.com/kadai/index?source=100009245'),
  },
  huanbei: {
    banner: bannerHuanbei,
    title:  '还呗',
    remark: '低息还信用卡神器，成功授信送手环',
    intros: [
      {
        title:   '还呗是什么？',
        content: [
          '还呗是一款低息分期代还信用卡的互联网金融产品，为优质信用卡用户提供低息、高效信用卡账单分期的产品。由上海数和科技荣誉出品。',
        ],
      },
      {
        title:   '还呗特点',
        content: [
          '利息最低至银行5折',
          '最高可获3万额度',
          '3秒钟极速到账',
        ],
      },
    ],
    activities: [
      '通过通联钱包注册成为还呗用户，申请贷款并成功授信，即可免费领取通联手环一只。',
      '在您满足免费领取的条件后，通联钱包客服将致电用户确认手环配送地址，手环将于30个工作日内统一进行配送。',
    ],
    onClick: () => (location.href = 'https://c.lattebank.com/hbzc/a1/220?channel=tl_d2'),
  },
}

export default (
  ({ params }) => {
    const { type } = params
    const { banner, title, remark, intros, activities, onClick } = appIntroList[type]
    return (
      <div>
        <div className='bg-white' style={ merge(bottomShadow, { height: 'calc(100% - 1.5rem)' }) }>
          <Flex className='hp40 box' style={{ padding: '.32rem 0' }} justify='center' >
            <img src={ banner } alt='' className='hp100' />
          </Flex>
          <div style={{ padding: '.32rem' }} className='touch-layer box hp60' >
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
        </div>
        <div style={{ height: '1.5rem', padding: '.32rem .64rem', bottom: 0 }} className='box' >
          <button className='font-m wp100 hp100 white' style={{ backgroundColor: '#3b97ff', border: 0, borderRadius: '0.05rem' }} onClick={ onClick }>立即申请</button>
        </div>
      </div>
    )
  }
)
