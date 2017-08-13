import { indent, rem, bottomShadow } from 'common'
import { WhiteSpace, Flex }          from 'antd-mobile'
import { hashHistory } from 'react-router'
import React           from 'react'
import banner          from 'images/banner.png'
import footer          from 'images/footer.png'
import card            from 'images/card.png'
import tag1            from 'images/tag1.png'
import tag2            from 'images/tag2.png'
import jiaotong        from 'images/jiaotong.png'
import shanghang       from 'images/shanghang.png'
import shoubiao        from 'images/shoubiao.png'
import iconXiaoying    from 'images/icon-xiaoying.png'
import iconHuanbei     from 'images/icon-huanbei.png'
import CardActivity    from './home-card-activity'
import App             from './home-app'
import Block           from './home-block'
import Line            from './line'

const cardInfoList = [
  {
    cardImg:     jiaotong,
    tagImg:      tag1,
    title:       '交通银行标准银联金卡',
    onClick:     () => (hashHistory.push('/card/jtbank')),
    contentList: [
      '新户办卡缤纷好礼三选一',
      '免息还款最长达56天',
      '每周五加油乐享5%优惠',
    ],
  },
  {
    cardImg:     shanghang,
    tagImg:      tag2,
    title:       '上海银行VISA双币种金卡',
    onClick:     () => (hashHistory.push('/card/shbank')),
    contentList: [
      '申请上海银行信用卡多好礼等你拿',
      '商务双肩包免费领取',
    ],
  },
]

const blockTitleList = [
  {
    icon:      card,
    name:      '办理信用卡',
    remark:    '【 免费拿手环 】',
    className: 'brand-color',
  },
  {
    icon:      shoubiao,
    name:      '代还信用卡',
    remark:    '【 还能领手环 】',
    className: 'orange',
  },
]

const appList = [
  {
    icon:    iconXiaoying,
    name:    '小赢卡贷',
    remark:  '最高可贷5万元',
    onClick: () => (hashHistory.push('/app/xiaoying')),
  },
  {
    icon:    iconHuanbei,
    name:    '还呗',
    remark:  '现在代还利率58折',
    onClick: () => (hashHistory.push('/app/huanbei')),
  },
]

const toIntro = () => hashHistory.push('/intro')

export default (
  () => (
    <div className='touch-layer hp100'>
      <header style={ bottomShadow } className='bg-white pdh pdv' >
        <img src={ banner } alt='' width='100%' onClick={ toIntro } />
      </header>
      <WhiteSpace size='xs' />
      <Block { ...blockTitleList[0] } style={ bottomShadow } >
        { cardInfoList.map(
            (cardInfo, idx) => (
              <div key={ cardInfo.title }>
                <CardActivity { ...cardInfo } />
                { idx === 0 && (<Line />) }
              </div>
            )
          )
        }
      </Block>
      <WhiteSpace size='xs' />
      <Block { ...blockTitleList[1] } style={ bottomShadow } >
        <Flex style={{ padding: rem(indent * 2) }} justify='between'>
          {
            appList.map(app => (
              <App key={ app.name } { ...app } />
            ))
          }
        </Flex>
      </Block>
      <WhiteSpace size='xs' />
      <footer>
        <img src={ footer } alt='' width='100%' onClick={ toIntro } />
      </footer>
    </div>
  )
)
