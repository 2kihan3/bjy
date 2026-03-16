"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PackageCheckIcon, TrendingUpIcon, ClockIcon, AlertTriangleIcon, MapPinIcon, TruckIcon, Home, ChevronRight, Bell, TrendingDown } from "lucide-react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import Link from "next/link"

// 取件率异常报警数据
const pickupAlerts = [
  { region: "华东地区", rate: "85.2%", target: "95%", gap: "-9.8%", level: "high", orders: 1256 },
  { region: "华南地区", rate: "88.5%", target: "95%", gap: "-6.5%", level: "high", orders: 892 },
  { region: "华北地区", rate: "92.1%", target: "95%", gap: "-2.9%", level: "medium", orders: 567 },
  { region: "西南地区", rate: "91.8%", target: "95%", gap: "-3.2%", level: "medium", orders: 423 },
  { region: "东北地区", rate: "94.2%", target: "95%", gap: "-0.8%", level: "low", orders: 234 },
]

// 即将超时率数据（超过1小时上门）
const overtimeData = [
  { courier: "顺丰速运", total: 2560, overtime: 128, rate: "5.0%", avgTime: "45分钟", trend: "down" },
  { courier: "京东物流", total: 1890, overtime: 113, rate: "6.0%", avgTime: "52分钟", trend: "up" },
  { courier: "中通快递", total: 1456, overtime: 102, rate: "7.0%", avgTime: "58分钟", trend: "down" },
  { courier: "韵达快递", total: 1230, overtime: 98, rate: "8.0%", avgTime: "62分钟", trend: "up" },
  { courier: "圆通快递", total: 980, overtime: 88, rate: "9.0%", avgTime: "65分钟", trend: "down" },
]

// 实时预警列表
const realtimeAlerts = [
  { id: 1, type: "取件超时", region: "上海浦东", courier: "顺丰", time: "5分钟前", status: "待处理" },
  { id: 2, type: "取件失败", region: "广州天河", courier: "京东", time: "12分钟前", status: "处理中" },
  { id: 3, type: "客户投诉", region: "北京朝阳", courier: "中通", time: "18分钟前", status: "已派单" },
  { id: 4, type: "取件超时", region: "深圳南山", courier: "顺丰", time: "25分钟前", status: "待处理" },
  { id: 5, type: "地址异常", region: "杭州西湖", courier: "韵达", time: "32分钟前", status: "处理中" },
]



export default function LogisticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("今日")

  return (
    <div className="page-container min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">物流中心</span>
        </div>
        <div className="flex items-center gap-2">
          {["今日", "昨日", "近7日", "近30日"].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={`${selectedPeriod === period ? "bg-blue-600 hover:bg-blue-700" : "bg-white/80 backdrop-blur-sm border border-blue-100"} transition-all duration-300`}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">今日取件单量</span>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <TruckIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">8,562</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+8.5% 较昨日</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-yellow-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-yellow-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">平均取件率</span>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <TrendingUpIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">90.4%</div>
          <div className="flex items-center gap-1">
            <TrendingDown className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">-1.2% 较目标</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-red-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-red-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">即将超时订单</span>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <ClockIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-red-600 mb-1">529</div>
          <div className="text-sm text-gray-600">超1小时未上门</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-orange-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-orange-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">待处理预警</span>
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <Bell className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-orange-600 mb-1">23</div>
          <div className="text-sm text-gray-600">需立即处理</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
              取件率异常
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-blue-50/50">
                  <TableRow>
                    <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">地区</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">取件率</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">目标</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">差距</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">级别</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pickupAlerts.map((item) => (
                    <TableRow key={item.region} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 font-medium text-gray-800">{item.region}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-gray-700">{item.rate}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-gray-500">{item.target}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-red-600">{item.gap}</TableCell>
                      <TableCell className="py-3 px-4 text-center">
                        <Badge
                          variant="outline"
                          className={`text-sm ${item.level === "high" ? "bg-red-100 text-red-700 border-red-200" : item.level === "medium" ? "bg-yellow-100 text-yellow-700 border-yellow-200" : "bg-green-100 text-green-700 border-green-200"}`}
                        >
                          {item.level === "high" ? "高" : item.level === "medium" ? "中" : "低"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-red-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <ClockIcon className="h-5 w-5 text-red-600" />
              取件超时监控
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-red-50/50">
                  <TableRow>
                    <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">快递公司</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">总单量</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">超时订单</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">超时率</TableHead>
                    <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">趋势</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overtimeData.map((item) => (
                    <TableRow key={item.courier} className="border-b border-gray-100 hover:bg-red-50/30 transition-colors">
                      <TableCell className="py-3 px-4 font-medium text-gray-800">{item.courier}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-gray-700">{item.total.toLocaleString()}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-red-600">{item.overtime}</TableCell>
                      <TableCell className="py-3 px-4 text-center text-gray-700">{item.rate}</TableCell>
                      <TableCell className="py-3 px-4 text-center">
                        {item.trend === "down" ? (
                          <span className="text-green-600 flex items-center justify-center gap-1">
                            <TrendingDown className="h-4 w-4" />
                            <span className="text-sm">下降</span>
                          </span>
                        ) : (
                          <span className="text-red-600 flex items-center justify-center gap-1">
                            <TrendingUpIcon className="h-4 w-4" />
                            <span className="text-sm">上升</span>
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <Bell className="h-5 w-5 text-orange-600" />
            实时预警列表
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
              {realtimeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 bg-gray-50/80 rounded-lg hover:bg-blue-50/50 transition-colors border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-center gap-4">
                    <Badge
                      variant="outline"
                      className={
                        alert.type === "取件超时"
                          ? "bg-red-100 text-red-700 border-red-200"
                          : alert.type === "取件失败"
                            ? "bg-orange-100 text-orange-700 border-orange-200"
                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                      }
                    >
                      {alert.type}
                    </Badge>
                    <span className="text-sm font-medium text-gray-900">{alert.region}</span>
                    <span className="text-sm text-gray-500">{alert.courier}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <Badge
                      variant="outline"
                      className={
                        alert.status === "待处理"
                          ? "bg-red-100 text-red-700 border-red-200"
                          : alert.status === "处理中"
                            ? "bg-blue-100 text-blue-700 border-blue-200"
                            : "bg-green-100 text-green-700 border-green-200"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
        </CardContent>
      </div>
    </div>
  )
}