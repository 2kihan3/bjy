import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">工作台</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline">今日</Badge>
          <Badge variant="default">3月12日</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">总用户数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <div className="text-xs text-green-500 mt-1">+2.5% 较昨日</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">订单量</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <div className="text-xs text-green-500 mt-1">+1.8% 较昨日</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">物流配送</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <div className="text-xs text-red-500 mt-1">-0.5% 较昨日</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">财务收入</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥23,456</div>
            <div className="text-xs text-green-500 mt-1">+3.2% 较昨日</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>最近订单</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <div className="font-medium">订单 #{1000 + index}</div>
                    <div className="text-sm text-muted-foreground">2024-03-12 10:{index + 30}:00</div>
                  </div>
                  <Badge variant={index % 2 === 0 ? "default" : "secondary"}>
                    {index % 2 === 0 ? "已完成" : "处理中"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>系统状态</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">服务器</span>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  正常
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">数据库</span>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  正常
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API服务</span>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  负载较高
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">缓存</span>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  正常
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}