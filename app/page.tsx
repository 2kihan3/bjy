import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UsersIcon, ShoppingBagIcon, TrendingUpIcon, XCircleIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">工作台</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline">今日</Badge>
          <Badge variant="default">3月12日</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-hover bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <CardHeader>
              <CardTitle className="module-title text-blue-700">用户与订单数据</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">总PV</span>
                    <TrendingUpIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">125,432</div>
                  <div className="text-sm text-green-600 font-medium">+12.5% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">新用户PV</span>
                    <UsersIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">34,567</div>
                  <div className="text-sm text-green-600 font-medium">+8.3% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">下单量</span>
                    <ShoppingBagIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">8,765</div>
                  <div className="text-sm text-green-600 font-medium">+5.2% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-red-600 font-medium">订单取消量</span>
                    <XCircleIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">1,234</div>
                  <div className="text-sm text-red-600 font-medium">+2.1% 较昨日</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-gradient-to-br from-green-50 to-white border border-green-100">
            <CardHeader>
              <CardTitle className="module-title text-green-700">快递物流</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-orange-600 font-medium">当日取件率</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-500">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">98.7%</div>
                  <div className="text-sm text-green-600 font-medium">+0.5% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">顺丰订单量</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                      <path d="M20 17H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></path>
                      <path d="M4 12v8a2 2 0 0 0 2 2h10"></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">3,456</div>
                  <div className="text-sm text-green-600 font-medium">+3.2% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">德邦订单量</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                      <path d="M20 17H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></path>
                      <path d="M4 12v8a2 2 0 0 0 2 2h10"></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">1,234</div>
                  <div className="text-sm text-green-600 font-medium">+1.8% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">订单签收量</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">4,567</div>
                  <div className="text-sm text-green-600 font-medium">+2.5% 较昨日</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-gradient-to-br from-purple-50 to-white border border-purple-100">
            <CardHeader>
              <CardTitle className="module-title text-purple-700">财务</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">现金发放量</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
                      <rect width="16" height="10" x="4" y="4" rx="2"></rect>
                      <line x1="16" y1="20" x2="16" y2="10"></line>
                      <line x1="8" y1="20" x2="8" y2="10"></line>
                      <line x1="4" y1="14" x2="20" y2="14"></line>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">¥234,567</div>
                  <div className="text-sm text-green-600 font-medium">+5.2% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">现金提现量</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                      <rect width="16" height="10" x="4" y="4" rx="2"></rect>
                      <line x1="16" y1="10" x2="16" y2="20"></line>
                      <line x1="8" y1="10" x2="8" y2="20"></line>
                      <line x1="4" y1="14" x2="20" y2="14"></line>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">¥189,765</div>
                  <div className="text-sm text-green-600 font-medium">+3.8% 较昨日</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">佣金预估</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-500">
                      <path d="M21 12c-1.5 0-3 .5-3 3v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4c0-2.5 3-3 3-3s3 .5 3 3v1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M3 6h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">¥45,678</div>
                  <div className="text-sm text-green-600 font-medium">+2.1% 较昨日</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="card-hover bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <CardHeader>
              <CardTitle className="module-title text-blue-700">行业信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-blue-800">2026年物流行业最新政策</div>
                    <div className="text-xs text-blue-600">发布于 2026-03-10</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-blue-800">电商平台运营指南</div>
                    <div className="text-xs text-blue-600">发布于 2026-03-08</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-blue-800">财务风控管理规范</div>
                    <div className="text-xs text-blue-600">发布于 2026-03-05</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-gradient-to-br from-orange-50 to-white border border-orange-100">
            <CardHeader>
              <CardTitle className="module-title text-orange-700">预警信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-lg">
                  <div className="text-sm font-medium text-red-700">订单异常增长</div>
                  <div className="text-xs text-red-600">10分钟前</div>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
                  <div className="text-sm font-medium text-yellow-700">物流延迟预警</div>
                  <div className="text-xs text-yellow-600">30分钟前</div>
                </div>
                <div className="p-3 border-l-4 border-orange-500 bg-orange-50 rounded-lg">
                  <div className="text-sm font-medium text-orange-700">库存不足提醒</div>
                  <div className="text-xs text-orange-600">1小时前</div>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-700">系统维护通知</div>
                  <div className="text-xs text-blue-600">2小时前</div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-700">数据同步完成</div>
                  <div className="text-xs text-green-600">3小时前</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
