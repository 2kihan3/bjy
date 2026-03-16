"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUpIcon, BookOpenIcon, MessageSquareIcon, EyeIcon, ChevronRightIcon, Share2Icon, ThumbsDownIcon, TrophyIcon, Home, ChevronRight, TrendingUpIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import Link from "next/link"

export default function SocialMediaPage() {
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
          <span className="text-gray-900 font-medium">新媒体分析</span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-red-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-red-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">点赞量</span>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <ThumbsUpIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">125,432</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+15.2% 较昨日</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-yellow-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-yellow-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">收藏量</span>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <BookOpenIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">45,678</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+8.3% 较昨日</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">评论量</span>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <MessageSquareIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">34,567</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+12.1% 较昨日</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">曝光量</span>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <EyeIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">1,234,567</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+5.2% 较昨日</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-green-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">点击量</span>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <ChevronRightIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">567,890</div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">+3.1% 较昨日</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <TrophyIcon className="h-5 w-5 text-blue-600" />
              粉丝数量分析
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { month: '1月', 抖音: 125000, 小红书: 85000, 微博: 75000, 知乎: 45000, 今日头条: 65000, 总计: 395000 },
                    { month: '2月', 抖音: 132000, 小红书: 88000, 微博: 78000, 知乎: 48000, 今日头条: 68000, 总计: 414000 },
                    { month: '3月', 抖音: 145000, 小红书: 92000, 微博: 82000, 知乎: 52000, 今日头条: 72000, 总计: 443000 },
                    { month: '4月', 抖音: 158000, 小红书: 98000, 微博: 85000, 知乎: 55000, 今日头条: 75000, 总计: 471000 },
                    { month: '5月', 抖音: 165000, 小红书: 102000, 微博: 88000, 知乎: 58000, 今日头条: 78000, 总计: 491000 },
                    { month: '6月', 抖音: 172000, 小红书: 105000, 微博: 90000, 知乎: 60000, 今日头条: 80000, 总计: 507000 },
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px', 
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="抖音" stroke="#ff4d4f" strokeWidth={2} />
                  <Line type="monotone" dataKey="小红书" stroke="#fa8c16" strokeWidth={2} />
                  <Line type="monotone" dataKey="微博" stroke="#1890ff" strokeWidth={2} />
                  <Line type="monotone" dataKey="知乎" stroke="#722ed1" strokeWidth={2} />
                  <Line type="monotone" dataKey="今日头条" stroke="#52c41a" strokeWidth={2} />
                  <Line type="monotone" dataKey="总计" stroke="#000000" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <EyeIcon className="h-5 w-5 text-green-600" />
              点击与曝光数据
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="clicks" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-green-50/50 p-1 rounded-lg">
                <TabsTrigger value="clicks" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">点击数据</TabsTrigger>
                <TabsTrigger value="exposure" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">曝光数据</TabsTrigger>
              </TabsList>
              <TabsContent value="clicks" className="mt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: '1月', 小红书: 120000, 微博: 100000, 知乎: 75000, 今日头条: 85000, 总计: 380000 },
                        { month: '2月', 小红书: 125000, 微博: 105000, 知乎: 78000, 今日头条: 88000, 总计: 396000 },
                        { month: '3月', 小红书: 132000, 微博: 110000, 知乎: 82000, 今日头条: 92000, 总计: 416000 },
                        { month: '4月', 小红书: 138000, 微博: 115000, 知乎: 85000, 今日头条: 95000, 总计: 433000 },
                        { month: '5月', 小红书: 142000, 微博: 118000, 知乎: 88000, 今日头条: 98000, 总计: 446000 },
                        { month: '6月', 小红书: 145000, 微博: 120000, 知乎: 90000, 今日头条: 100000, 总计: 455000 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px', 
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="小红书" stroke="#fa8c16" strokeWidth={2} />
                      <Line type="monotone" dataKey="微博" stroke="#1890ff" strokeWidth={2} />
                      <Line type="monotone" dataKey="知乎" stroke="#722ed1" strokeWidth={2} />
                      <Line type="monotone" dataKey="今日头条" stroke="#52c41a" strokeWidth={2} />
                      <Line type="monotone" dataKey="总计" stroke="#000000" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="exposure" className="mt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: '1月', 抖音: 450000, 小红书: 320000, 微博: 280000, 知乎: 180000, 今日头条: 220000, 总计: 1450000 },
                        { month: '2月', 抖音: 465000, 小红书: 330000, 微博: 290000, 知乎: 185000, 今日头条: 225000, 总计: 1495000 },
                        { month: '3月', 抖音: 480000, 小红书: 340000, 微博: 300000, 知乎: 190000, 今日头条: 230000, 总计: 1540000 },
                        { month: '4月', 抖音: 495000, 小红书: 350000, 微博: 310000, 知乎: 195000, 今日头条: 235000, 总计: 1585000 },
                        { month: '5月', 抖音: 510000, 小红书: 360000, 微博: 320000, 知乎: 200000, 今日头条: 240000, 总计: 1630000 },
                        { month: '6月', 抖音: 525000, 小红书: 370000, 微博: 330000, 知乎: 205000, 今日头条: 245000, 总计: 1675000 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px', 
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="抖音" stroke="#ff4d4f" strokeWidth={2} />
                      <Line type="monotone" dataKey="小红书" stroke="#fa8c16" strokeWidth={2} />
                      <Line type="monotone" dataKey="微博" stroke="#1890ff" strokeWidth={2} />
                      <Line type="monotone" dataKey="知乎" stroke="#722ed1" strokeWidth={2} />
                      <Line type="monotone" dataKey="今日头条" stroke="#52c41a" strokeWidth={2} />
                      <Line type="monotone" dataKey="总计" stroke="#000000" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <TrophyIcon className="h-5 w-5 text-orange-600" />
              平台排行榜
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="likes" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-50/50 p-1 rounded-lg">
                <TabsTrigger value="likes" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <div className="flex items-center gap-1">
                    <ThumbsUpIcon className="h-4 w-4" />
                    <span>点赞</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="favorites" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <div className="flex items-center gap-1">
                    <BookOpenIcon className="h-4 w-4" />
                    <span>收藏</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="comments" className="rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <div className="flex items-center gap-1">
                    <MessageSquareIcon className="h-4 w-4" />
                    <span>评论</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="likes" className="mt-4">
                <Table className="w-full">
                  <TableHeader className="bg-blue-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排名</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">平台</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">点赞数</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-yellow-500" />
                          <span>1</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">抖音</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">45,678</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-gray-400" />
                          <span>2</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">小红书</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">32,109</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-orange-700" />
                          <span>3</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">微博</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">28,901</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="favorites" className="mt-4">
                <Table className="w-full">
                  <TableHeader className="bg-yellow-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排名</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">平台</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">收藏数</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-yellow-500" />
                          <span>1</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">小红书</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">15,678</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-yellow-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-gray-400" />
                          <span>2</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">抖音</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">12,345</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-yellow-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-orange-700" />
                          <span>3</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">知乎</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">9,876</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="comments" className="mt-4">
                <Table className="w-full">
                  <TableHeader className="bg-blue-50/50">
                    <TableRow>
                      <TableHead className="py-3 px-4 text-center text-sm font-medium text-gray-700">排名</TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-700">平台</TableHead>
                      <TableHead className="py-3 px-4 text-right text-sm font-medium text-gray-700">评论数</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-yellow-500" />
                          <span>1</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">微博</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">10,234</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-gray-400" />
                          <span>2</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">抖音</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">8,901</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50/30 transition-colors">
                      <TableCell className="py-3 px-4 text-center font-medium text-gray-800">
                        <div className="flex items-center justify-center gap-1">
                          <TrophyIcon className="h-4 w-4 text-orange-700" />
                          <span>3</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3 px-4 font-medium text-gray-800">小红书</TableCell>
                      <TableCell className="py-3 px-4 text-right text-gray-700">6,543</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-red-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <ThumbsUpIcon className="h-5 w-5 text-red-600" />
              抖音
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsUpIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm">点赞</span>
                </div>
                <div className="text-lg font-bold">45,678</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">收藏</span>
                </div>
                <div className="text-lg font-bold">12,345</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">评论</span>
                </div>
                <div className="text-lg font-bold">8,901</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">曝光量</span>
                </div>
                <div className="text-lg font-bold">456,789</div>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-orange-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <BookOpenIcon className="h-5 w-5 text-orange-600" />
              小红书
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsUpIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm">点赞</span>
                </div>
                <div className="text-lg font-bold">32,109</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">收藏</span>
                </div>
                <div className="text-lg font-bold">15,678</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">评论</span>
                </div>
                <div className="text-lg font-bold">6,543</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">曝光量</span>
                </div>
                <div className="text-lg font-bold">321,098</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">点击量</span>
                </div>
                <div className="text-lg font-bold">123,456</div>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MessageSquareIcon className="h-5 w-5 text-blue-600" />
              微博
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsUpIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm">点赞</span>
                </div>
                <div className="text-lg font-bold">28,901</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">评论</span>
                </div>
                <div className="text-lg font-bold">10,234</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Share2Icon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">分享</span>
                </div>
                <div className="text-lg font-bold">15,678</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">曝光量</span>
                </div>
                <div className="text-lg font-bold">289,012</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">点击量</span>
                </div>
                <div className="text-lg font-bold">102,345</div>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <BookOpenIcon className="h-5 w-5 text-purple-600" />
              知乎
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsUpIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm">赞</span>
                </div>
                <div className="text-lg font-bold">18,765</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsDownIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">踩</span>
                </div>
                <div className="text-lg font-bold">2,345</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">收藏</span>
                </div>
                <div className="text-lg font-bold">9,876</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">评论</span>
                </div>
                <div className="text-lg font-bold">5,432</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">曝光量</span>
                </div>
                <div className="text-lg font-bold">187,654</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">点击量</span>
                </div>
                <div className="text-lg font-bold">76,543</div>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-green-100 p-6 transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <ChevronRightIcon className="h-5 w-5 text-green-600" />
              今日头条
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ThumbsUpIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm">点赞</span>
                </div>
                <div className="text-lg font-bold">22,345</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">收藏</span>
                </div>
                <div className="text-lg font-bold">8,765</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">评论</span>
                </div>
                <div className="text-lg font-bold">4,321</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">曝光量</span>
                </div>
                <div className="text-lg font-bold">223,456</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">点击量</span>
                </div>
                <div className="text-lg font-bold">87,654</div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  )
}