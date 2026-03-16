"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FactoryIcon, DollarSignIcon, AlertTriangleIcon, ScaleIcon, TrophyIcon, Home, ChevronRight, TrendingUpIcon, TrendingDown } from "lucide-react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function FactoryPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("本月")

  return (
    <div className="page-container min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">工厂中心</span>
        </div>
        <div className="flex items-center gap-2">
          {["本月", "上月", "近3月", "近6月"].map((period) => (
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
            <span className="text-sm font-medium text-gray-600">合作工厂数量</span>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FactoryIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">128</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+5 较上月</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-green-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">当月回款总额</span>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSignIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">¥2,456,789</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+8.5% 较上月</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-yellow-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-yellow-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">回款异常率</span>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertTriangleIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">3.2%</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">+0.5% 较上月</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">误差率</span>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <ScaleIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">1.8%</div>
          <div className="flex items-center gap-1">
            <TrendingDown className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">-0.3% 较上月</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-yellow-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
              回款异常率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-yellow-50/50">
                  <TableRow>
                    <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">工厂名称</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">回款额</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">异常额</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">异常率</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">深圳顺发工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">¥125,600</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">¥8,900</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">7.1%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">广州恒达工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">¥98,450</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">¥4,320</TableCell>
                    <TableCell className="py-3 px-4 text-right text-yellow-600">4.4%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">上海明辉工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">¥156,780</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">¥3,120</TableCell>
                    <TableCell className="py-3 px-4 text-right text-yellow-600">2.0%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">北京鑫源工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">¥89,320</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">¥1,250</TableCell>
                    <TableCell className="py-3 px-4 text-right text-green-600">1.4%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-yellow-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">成都宏远工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">¥112,560</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">¥5,620</TableCell>
                    <TableCell className="py-3 px-4 text-right text-yellow-600">5.0%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <ScaleIcon className="h-5 w-5 text-purple-600" />
              重量误差率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-purple-50/50">
                  <TableRow>
                    <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">工厂名称</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">订单数</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">误差单数</TableHead>
                    <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">误差率</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">深圳顺发工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">125</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">8</TableCell>
                    <TableCell className="py-3 px-4 text-right text-yellow-600">6.4%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">广州恒达工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">98</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">3</TableCell>
                    <TableCell className="py-3 px-4 text-right text-green-600">3.1%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">上海明辉工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">156</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">4</TableCell>
                    <TableCell className="py-3 px-4 text-right text-green-600">2.6%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">北京鑫源工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">89</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">2</TableCell>
                    <TableCell className="py-3 px-4 text-right text-green-600">2.2%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50/30 transition-colors">
                    <TableCell className="py-3 px-4 font-medium text-gray-800">成都宏远工厂</TableCell>
                    <TableCell className="py-3 px-4 text-right text-gray-700">112</TableCell>
                    <TableCell className="py-3 px-4 text-right text-red-600">5</TableCell>
                    <TableCell className="py-3 px-4 text-right text-yellow-600">4.5%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <TrophyIcon className="h-5 w-5 text-orange-600" />
            工厂排行榜
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weight" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-blue-50/50 p-1 rounded-lg">
              <TabsTrigger value="weight" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">重量</TabsTrigger>
              <TabsTrigger value="price" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">价格</TabsTrigger>
              <TabsTrigger value="credit" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">信用</TabsTrigger>
            </TabsList>
            <TabsContent value="weight" className="mt-4">
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader className="bg-blue-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排行号</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">工厂名称</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">重量(吨)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">1</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">上海明辉工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">1,256.8</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">2</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">深圳顺发工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">987.5</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">3</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">广州恒达工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">854.2</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">4</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">成都宏远工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">765.9</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">5</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">北京鑫源工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">623.4</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="price" className="mt-4">
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader className="bg-green-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排行号</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">工厂名称</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">价格(元/千克)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-green-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">1</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">北京鑫源工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">12.5</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-green-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">2</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">上海明辉工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">11.8</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-green-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">3</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">广州恒达工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">10.5</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-green-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">4</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">成都宏远工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">9.8</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-green-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">5</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">深圳顺发工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">9.2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="credit" className="mt-4">
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader className="bg-orange-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排行号</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">工厂名称</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">信用分数</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">1</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">上海明辉工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">98</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">2</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">北京鑫源工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">95</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">3</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">广州恒达工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">92</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">4</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">深圳顺发工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">88</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-orange-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">5</TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">成都宏远工厂</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">85</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </div>
  )
}