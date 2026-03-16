"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UsersIcon, TrendingUpIcon, UserPlusIcon, ShoppingBagIcon, ClockIcon, StarIcon, ActivityIcon, MoonIcon, XCircleIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export default function UsersPage() {
  // 用户生命周期数据
  const userLifecycleData = [
    { name: '新用户', value: 12345, change: '+15.2%', color: '#3B82F6' },
    { name: '活跃用户', value: 45678, change: '+8.3%', color: '#10B981' },
    { name: '沉默用户', value: 34567, change: '+2.1%', color: '#F59E0B' },
    { name: '流失用户', value: 32842, change: '+1.5%', color: '#EF4444' },
  ];
  
  // 图表配置
  const userLifecycleConfig = {
    value: {
      label: '数量',
    },
    '新用户': {
      label: '新用户',
      color: '#3B82F6',
    },
    '活跃用户': {
      label: '活跃用户',
      color: '#10B981',
    },
    '沉默用户': {
      label: '沉默用户',
      color: '#F59E0B',
    },
    '流失用户': {
      label: '流失用户',
      color: '#EF4444',
    },
  } satisfies ChartConfig;
  
  return (
    <div className="page-container min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">用户中心</h1>
          <p className="text-gray-600 mt-1">用户数据概览与分析</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-gray-600">数据更新时间: 2026-03-13</span>
        </div>
      </div>
      
      {/* 用户数据统计 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-blue-600" />
          用户数据统计
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">总用户</span>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">125,432</div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+12.5% 较昨日</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-green-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">活跃用户</span>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <ActivityIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">45,678</div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+8.3% 较昨日</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-cyan-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-cyan-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">新增用户</span>
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                <UserPlusIcon className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">3,456</div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+5.2% 较昨日</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-orange-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">下单用户</span>
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <ShoppingBagIcon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">2,345</div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+3.1% 较昨日</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">新用户留存率</span>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <ClockIcon className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">67.8%</div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+2.5% 较昨日</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <ActivityIcon className="h-5 w-5 text-blue-600" />
            用户生命周期
          </h3>
          <div className="h-80">
            <ChartContainer
              config={userLifecycleConfig}
              className="h-full w-full"
            >
              <BarChart
                data={userLifecycleData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis type="category" dataKey="name" width={100} stroke="#9CA3AF" />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => [`${value}`, '数量']}
                      labelFormatter={(label) => {
                        const data = userLifecycleData.find(item => item.name === label);
                        return `${label} (${data?.change})`;
                      }}
                      className="bg-white rounded-lg shadow-md border border-gray-100"
                    />
                  }
                />
                <Bar 
                  dataKey="value" 
                  radius={[0, 6, 6, 0]}
                  barSize={30}
                >
                  {userLifecycleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-green-600" />
            用户评价统计
          </h3>
          <div className="h-80">
            <ChartContainer
              config={userLifecycleConfig}
              className="h-full w-full"
            >
              <BarChart
                data={[
                  { name: '好评', value: 8567, color: '#10B981' },
                  { name: '中评', value: 1234, color: '#F59E0B' },
                  { name: '差评', value: 567, color: '#EF4444' }
                ]}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis type="category" dataKey="name" width={80} stroke="#9CA3AF" />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => [`${value}`, '数量']}
                      className="bg-white rounded-lg shadow-md border border-gray-100"
                    />
                  }
                />
                <Bar 
                  dataKey="value" 
                  radius={[0, 6, 6, 0]}
                  barSize={30}
                >
                  {[
                    { name: '好评', value: 8567, color: '#10B981' },
                    { name: '中评', value: 1234, color: '#F59E0B' },
                    { name: '差评', value: 567, color: '#EF4444' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
      
      {/* 用户投诉统计 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <XCircleIcon className="h-5 w-5 text-red-600" />
          用户投诉统计
        </h3>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader className="bg-blue-50/50">
              <TableRow>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">平台</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">投诉总数</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">待处理</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">已解决</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">投诉率</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">趋势</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                <TableCell className="py-3 px-4 font-medium text-gray-800">淘宝</TableCell>
                <TableCell className="py-3 px-4 text-gray-800">125</TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">23</span>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">102</span>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-800">1.2%</TableCell>
                <TableCell className="py-3 px-4 text-green-600">
                  <div className="flex items-center gap-1">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">0.2%</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                <TableCell className="py-3 px-4 font-medium text-gray-800">京东</TableCell>
                <TableCell className="py-3 px-4 text-gray-800">89</TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">15</span>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">74</span>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-800">0.8%</TableCell>
                <TableCell className="py-3 px-4 text-green-600">
                  <div className="flex items-center gap-1">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">0.1%</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                <TableCell className="py-3 px-4 font-medium text-gray-800">拼多多</TableCell>
                <TableCell className="py-3 px-4 text-gray-800">234</TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">45</span>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">189</span>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-800">2.5%</TableCell>
                <TableCell className="py-3 px-4 text-red-600">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">0.3%</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-blue-50/30 transition-colors">
                <TableCell className="py-3 px-4 font-medium text-gray-800">抖音</TableCell>
                <TableCell className="py-3 px-4 text-gray-800">156</TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">28</span>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">128</span>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-800">1.8%</TableCell>
                <TableCell className="py-3 px-4 text-green-600">
                  <div className="flex items-center gap-1">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">0.2%</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}