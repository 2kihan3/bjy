import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">系统文档</h1>
      </div>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>一、工作台</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>工作台是一个快捷看板，需要进入本页面后直接能够看到需要关注的核心数据，因此可能存在和细分模块重复的数据内容。</p>
          
          <h2>1.1 筛选维度</h2>
          <p>时间：支持今日、昨日、7日、30日</p>
          <p>平台：全部、白鲸鱼、回收猿、萌兔、多多</p>
          
          <h2>1.2 用户与订单</h2>
          <p>总PV：记录浏览人数；</p>
          <p>新用户PV：新用户定义：7日内注册且尚未产生下单行为的用户，判定逻辑：当前时间-注册时间&lt;7天</p>
          <p>下单量：统计对应平台订单量</p>
          <p>当日取消量：只统计当日下单的订单被取消的数量，不管历史订单在今天取消的情况</p>
          <p>比值：按照小时统计，整点运行计算脚本（如10:00计算，10:01～10:59展示的均为以10:00为节点的数据）</p>
          <p>T：当日；T-1:昨日；</p>
          
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">项目</th>
                <th className="border border-gray-300 p-2">公式（4项通用）</th>
                <th className="border border-gray-300 p-2">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">当日</td>
                <td className="border border-gray-300 p-2">(V_T(0:00~t) - V_T-1(0:00~t)) / V_T-1(0:00~t)</td>
                <td className="border border-gray-300 p-2">今天/昨天，取最近的整点数据</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">昨日</td>
                <td className="border border-gray-300 p-2">(V_T-1 - V_T-2) / V_T-2</td>
                <td className="border border-gray-300 p-2">昨天比前天（0～24点整天的）</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">7日</td>
                <td className="border border-gray-300 p-2">(ΣV_Ti(1-7) - ΣV_T-1i(8-14)) / ΣV_Ti(8-14)</td>
                <td className="border border-gray-300 p-2">今天是T，算T-1到T-7，和T-8到T-14；两个7天求和结果的比值</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">30日</td>
                <td className="border border-gray-300 p-2">(ΣV_Ti(1-30) - ΣV_T-1i(31-60)) / ΣV_Ti(31-60)</td>
                <td className="border border-gray-300 p-2">同7日，算最近60天中后30天-前30天的</td>
              </tr>
            </tbody>
          </table>
          
          <h2>1.3 快递与物流</h2>
          <p>当日取件率：当日取件量/当日下单量</p>
          <p>订单签收量：签收时间为当日的订单量</p>
          <p>顺丰/德邦订单量：当日分配的所属快递公司单量</p>
          <p>计算逻辑同上</p>
          
          <h2>1.4 财务</h2>
          <p>现金发放量：当日发放到用户账户里的金额</p>
          <p>现金提现量：当日用户进行提现的金额</p>
          <p>佣金预估：根据订单数量进行统计（针对4月1日支付宝规则变更后），计算支付宝回收渠道未取消的订单数*佣金（分级：8元——江浙沪；6元——川渝福建安徽；5元——其他城市）</p>
          <p>计算逻辑同上</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>二、用户中心</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>2.1 筛选</h2>
          <p>时间、平台</p>
          
          <h2>2.2 用户定义：</h2>
          <p>总用户：后台记录的用户总数</p>
          <p>活跃用户：30天内有完单记录的用户</p>
          <p>沉默用户：30天内有登陆记录，但没有完单的</p>
          <p>流失用户：30日未登陆的用户</p>
          <p>新用户：7天内注册且没完单的用户</p>
          <p>下单用户：进行过下单动作的用户</p>
          <p>转化用户：完单过的用户</p>
          
          <h2>2.3 数据卡片：</h2>
          <p>总用户、活跃用户、新增用户、下单用户同2.2；</p>
          <p>新用户留存率：按照登陆行为计算，公式参考1.2表格</p>
          
          <h2>2.4 用户生命周期（需要增加几个数据条）</h2>
          <p>活跃用户、沉默用户、流失用户、新用户、下单用户、转化用户</p>
          
          <h2>2.5 用户评价统计</h2>
          <p>好评、中评、差评</p>
          
          <h2>2.6 用户投诉统计</h2>
          <p>展示所有平台的投诉数量，希望不随平台切换，只随时间维度切换时更新表格数据</p>
          <p>表头：平台、投诉总数、待处理、已解决、投诉率、趋势（同1.2计算逻辑）</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>三、物流中心</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>3.1 筛选</h2>
          <p>时间、平台</p>
          
          <h2>3.2 数据卡片</h2>
          <p>今日取件单量：创建时间为今日，已取件状态的数量</p>
          <p>待处理预警：物流部分触发的，未处理状态的预警数量</p>
          
          <h2>3.3 数据图表（新增）</h2>
          <h3>3.3.1 取件率</h3>
          <p>TAB：总计、德邦、顺丰、京东、漫游鲸。</p>
          <p>总计：横轴：德邦、顺丰、京东、漫游鲸；纵轴：取件率</p>
          <p>德邦：小时为横轴，取件率为纵轴；</p>
          <p>顺丰、京东、漫游鲸同德邦。</p>
          
          <h3>3.3.2 超时订单统计</h3>
          <p>TAB：总计、德邦、顺丰、京东、漫游鲸。</p>
          <p>总计：横轴：德邦、顺丰、京东、漫游鲸；纵轴：超时订单数</p>
          <p>德邦：小时为横轴，取件率为纵轴；</p>
          <p>顺丰、京东、漫游鲸同德邦。</p>
          
          <h3>3.3.3 取件率异常</h3>
          <p>表头：地区、取件率、目标、差距；</p>
          <p>表头说明：</p>
          <p>地区：根据实际需求调整，可从几个维度进行，如：两广、江浙沪、东北等地理位置聚合；也可按地区价值聚合，如：江浙沪、京津等。</p>
          <p>取件率：根据地区筛选订单后计算。</p>
          <p>目标：主动配置，需要增加配置入口。</p>
          <p>差距：取件率-目标</p>
          <p>级别：配置</p>
          
          <h3>3.3.4 取件超时监控</h3>
          <p>表头：快递、单量、超时单、超时率、趋势</p>
          <p>表头内字段：德邦、顺丰、京东、漫游鲸。</p>
          <p>趋势：由上升下降，变为具体数值，计算方式参考1.2</p>
          
          <h3>3.3.5 预警列表</h3>
          <p>从预警管理读取</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>四、工厂中心</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>4.1 筛选</h2>
          <p>时间</p>
          
          <h2>4.2 数据卡片</h2>
          <p>合作工厂数量、当月回款总额、回款异常率、误差率，</p>
          <p>从裕润智云获取。</p>
          
          <h2>4.3 回款异常率</h2>
          <p>表头：工厂名称、回款额、异常额、异常率；</p>
          <p>支持垂直滑动，按照异常率由高到低排序</p>
          
          <h2>4.4 重量误差率</h2>
          <p>表头：工厂名称、订单数、误差单数、误差率</p>
          <p>支持垂直滑动，按照误差率由高到低排序</p>
          
          <h2>4.5 工厂排行榜</h2>
          <p>TAB：重量、价格、信用分</p>
          <p>表头：排行、工厂名、重量/价格/信用分</p>
          <p>仅显示TOP5</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>五、新媒体分析</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>5.1 筛选</h2>
          <p>时间</p>
          
          <h2>5.2 数据卡片</h2>
          <p>点赞量、收藏量、评论量、曝光量、点击量，</p>
          <p>除点击量不包含抖音的数据，其他四个都是5个平台的聚合总数据</p>
          
          <h2>5.3 粉丝数量分析</h2>
          <p>折线图，图中包含6条折线对应5个平台和总量。横轴为时间，随时间筛选变化</p>
          
          <h2>5.4 点击与曝光</h2>
          <p>TAB：点击数据、曝光数据</p>
          <p>点击：折线图，图中包含5条折线对应4个平台和总量。横轴为时间，随时间筛选变化</p>
          <p>曝光：折线图，图中包含6条折线对应5个平台和总量。横轴为时间，随时间筛选变化</p>
          
          <h2>5.5 排行榜</h2>
          <p>TAB：点赞、收藏、评论</p>
          <p>表头：排行、平台、点赞量/收藏量/评论量</p>
          <p>展示TOP3或者5个都展示</p>
          
          <h2>5.6 平台数据卡</h2>
          <p>抖音：点赞、收藏、评论、曝光</p>
          <p>小红书：点赞、收藏、评论、曝光、点击</p>
          <p>微博：点赞、收藏、评论、曝光、点击</p>
          <p>知乎：点赞、踩、收藏、评论、曝光、点击</p>
          <p>头条：点赞、收藏、评论、曝光、点击</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-50">
          <CardTitle>六、财务风控</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>6.1 财务数据概览（所有平台双端口汇总）</h2>
          <p>今日提现总额、待审核总额、异常用户数</p>
          
          <h2>6.2 平台提现统计</h2>
          <p>四个平台，各自的微信和支付宝端，表中共8条数据</p>
          <p>表头：平台名称、提现金额、提现人数、异常用户、提现端口</p>
        </CardContent>
      </Card>
    </div>
  )
}