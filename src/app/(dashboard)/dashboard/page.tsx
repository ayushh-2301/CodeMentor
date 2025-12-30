
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardPage() {
    return (
        <div className="flex h-screen bg-background text-foreground">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Solved
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last week
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Current Streak
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3 Days</div>
                            <p className="text-xs text-muted-foreground">
                                Keep it up!
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Global Rank
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">#4,203</div>
                            <p className="text-xs text-muted-foreground">
                                Top 15%
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Next Goal
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Graph BFS</div>
                            <p className="text-xs text-muted-foreground">
                                Suggested Topic
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Activity Heatmap</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <div className="flex h-[200px] items-center justify-center text-muted-foreground bg-muted/20 rounded-md">
                                (Heatmap Visualization Component)
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px]">
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    Solved "Two Sum"
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    2 hours ago
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">
                                                +10 XP
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
