import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeatmapPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">热力分析</h1>
      <Card>
        <CardHeader>
          <CardTitle>热力图分析</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">热力分析页面内容将在此实现</p>
        </CardContent>
      </Card>
    </div>
  )
}