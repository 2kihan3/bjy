"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSignIcon, ClockIcon, AlertTriangleIcon, Home, ChevronRight, TrendingUpIcon, TrendingDownIcon, ActivityIcon } from "lucide-react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import Link from "next/link"

export default function FinancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("今日")

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-blue-400">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-2xl font-bold text-foreground">财务风控</span>
        </div>
        <div className="flex items-center gap-2">
          {["今日", "昨日", "近7日", "近30日"].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={`transition-all duration-300`}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      <Card className="card-hover bg-gradient-to-br from-blue-50 to-white border border-blue-100 mb-6">
        <CardHeader>
          <CardTitle className="module-title text-blue-700">财务数据概览</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium">今日提现总额</span>
                <DollarSignIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">¥125,678</div>
              <div className="text-sm text-green-600 font-medium">+8.2% 较昨日</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-yellow-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-yellow-600 font-medium">待审核总额</span>
                <ClockIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">¥45,321</div>
              <div className="text-sm text-yellow-600 font-medium">+5 笔待审核</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-red-600 font-medium">异常用户数</span>
                <AlertTriangleIcon className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-600 mb-1">12</div>
              <div className="text-sm text-red-600 font-medium">+2 较昨日</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover bg-gradient-to-br from-green-50 to-white border border-green-100">
        <CardHeader>
          <CardTitle className="module-title text-green-700 flex items-center gap-2">
            <DollarSignIcon className="h-5 w-5 text-green-500" />
            各平台提现统计
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader className="bg-green-50">
                <TableRow>
                  <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">平台名称</TableHead>
                  <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">提现金额</TableHead>
                  <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">提现人数</TableHead>
                  <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">异常用户</TableHead>
                  <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">提现端口</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="py-3 px-4 font-medium text-foreground">淘宝</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">¥45,678</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">125</TableCell>
                  <TableCell className="py-3 px-4 text-right text-red-500">3</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">支付宝</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="py-3 px-4 font-medium text-foreground">京东</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">¥32,109</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">89</TableCell>
                  <TableCell className="py-3 px-4 text-right text-red-500">2</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">微信支付</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="py-3 px-4 font-medium text-foreground">拼多多</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">¥28,901</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">76</TableCell>
                  <TableCell className="py-3 px-4 text-right text-red-500">4</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">支付宝</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <TableCell className="py-3 px-4 font-medium text-foreground">抖音</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">¥18,765</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">54</TableCell>
                  <TableCell className="py-3 px-4 text-right text-red-500">2</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">微信支付</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-3 px-4 font-medium text-foreground">小红书</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">¥15,678</TableCell>
                  <TableCell className="py-3 px-4 text-right text-gray-600">43</TableCell>
                  <TableCell className="py-3 px-4 text-right text-red-500">1</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">支付宝</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}