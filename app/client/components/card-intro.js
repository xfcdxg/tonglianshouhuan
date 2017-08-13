import React from 'react'
import { merge } from 'ramda'
import { Flex } from 'antd-mobile'
import { bottomShadow } from 'common'
import bannerShbank from 'images/banner_shbank.png'
import bannerJtbank from 'images/banner_jtbank.png'
import Line  from './line'

const appIntroList = {
  shbank: {
    banner:     bannerShbank,
    title:      '办理上海银行信用卡免费领通联手环',
    activities: [
      '1.活动时间：2017.06.01-2017.12.31',
      '2.活动对象：通联钱包注册会员（工作或生活地点在上海）',
      '3.活动内容：【办卡送手环】通过本链接申请上海银行信用卡，信用卡成功核发后激活即可获价值168元的通联智能公交手环一块！',
      '4.信用卡激活后90天内完成3笔不低于99元的消费后，还可获赠598元商务背包一个！',
      '5.手环将于60额工作日内统一进行配送，通联钱包客服致电用户确认手环配送地址。',
      '6.若出现恶意作弊等非正常方式参与活动的行为，通联支付有权不发放奖励。',
    ],
    attentions: [
      '*本活动仅限从未申请过上海银行信用卡主卡的新客户。包括仅持有上海银行信用卡附属卡或销户时间超过半年（含）的新客户。',
      '*参与此次活动的客户不可再参与其他上海银行同期新客户发卡活动及不能作为被推荐人参与推荐办卡活动。',
      '*请注意上海银行是否核发申请人申请的信用卡由上海银行最终决定，获得参加资格并不代表上海银行一定会核发信用卡。',
      '*奖励由通联支付和上海银行提供，信用卡申请人可结合实际问题想通联支付和上海银行客服进行咨询。',
      '通联支付客服：95156',
      '上海银行客服：95594',
      '服务时间：9：00—18：00',
    ],
    onClick: () => (location.href = 'https://mbank.bankofshanghai.com/pweixin/static/index.html?_TransactionId=CreditCardApply&_CardType=0300001391&YLLink=400144'),
  },
  jtbank: {
    banner:     bannerJtbank,
    title:      '办理交通银行信用卡免费领通联手环',
    activities: [
      '1.活动时间：2017.06.01-2017.12.31',
      '2.活动对象：通联钱包注册会员',
      '3.活动内容：【办卡送手环】通过本链接申请交通银行信用卡，信用卡成功核发后90天内（含）有任意首次消费（包括交易、取现或转账）可获价值168元的通联智能公交手环一块！',
      '4.信用卡激活并完成首刷后，手环将于60个工作日内统一进行配送。通联钱包客服致电用户确认手环配送地址。',
      '5.若出现恶意作弊等非正常方式参与活动行为，通联有权不发放奖励。',
    ],
    attentions: [
      '* 本活动仅限从未申请过交通银行信用卡主卡的新客户，包括仅持有交通银行信用卡附属卡或销户时间超过半年（含）的客户。',
      '* 参与此次活动的客户不可再参与其他交通银行同期新客户发卡活动及不能作为被推荐人参加推荐办卡活动。',
      '* 请注意交通银行是否核发申请人申请的信用卡由交通银行最终决定，获得参加资格并不代表交通银行一定会核发信用卡。',
      '* 通过参与本次活动获取的通联手环，使用通联钱包APP向手环内置交通卡进行空中充值时仅限使用交通银行信用卡作为支付渠道。',
      '咨询热线：4006695156 ',
      '热线服务时间：9:00AM—18:00PM',
      '* 交通银行信用卡中心客服热线：4008009888',
    ],
    onClick: () => {
      alert('通联ID 哪里来？')
      location.href = 'https://creditcardapp.bankcomm.com/applynew/front/apply/track/record.html?trackCode=A01191535999&userparam1='
    },
  },
}

export default (
  ({ params }) => {
    const { type } = params
    const { banner, title, activities, attentions, onClick } = appIntroList[type]
    return (
      <div>
        <div className='bg-white' style={ merge(bottomShadow, { height: 'calc(100% - 1.5rem)' }) }>
          <Flex className='hp40 box' style={{ padding: '.32rem 0' }} justify='center' >
            <img src={ banner } alt='' className='hp100' />
          </Flex>
          <div style={{ padding: '.32rem' }} className='touch-layer box hp60' >
            <div className='font-m blod pdv2'>{ title }</div>
            <div className='font-m pdv2'>活动说明：</div>
            {
              activities.map(activity => (<div className='font-ss gray-1 pdv2' key={ Math.random() }>{ activity }</div>))
            }
            <Line />
            <div className='font-m pdv2'>注意事项：</div>
            {
              attentions.map(activity => (<div className='font-ss gray-1 pdv2' key={ Math.random() }>{ activity }</div>))
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
