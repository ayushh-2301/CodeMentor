
"use client"

import { useState, use } from "react"
import Editor from "@monaco-editor/react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Send, Zap } from "lucide-react"

export default function ProblemPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [code, setCode] = useState("// Write your solution here\n")
    const [output, setOutput] = useState("")

    const handleRun = async () => {
        setOutput("Running...\n(This will connect to Piston API)")
        // Call user defined Piston service here
    }

    const handleGetHint = async () => {
        // Call user defined AI service here
        console.log("Requesting hint...")
    }

    return (
        <div className="h-screen w-full flex flex-col bg-background">
            {/* Header */}
            <div className="flex h-12 items-center justify-between border-b px-4">
                <div className="font-semibold">Problem {id}: Two Sum</div>
                <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" onClick={handleRun}>
                        <Play className="mr-2 h-4 w-4" /> Run
                    </Button>
                    <Button size="sm">
                        <Send className="mr-2 h-4 w-4" /> Submit
                    </Button>
                </div>
            </div>

            {/* Main Workspace */}
            <ResizablePanelGroup direction="horizontal" className="flex-1">

                {/* Left: Problem Description */}
                <ResizablePanel defaultSize={40} minSize={30}>
                    <div className="h-full flex flex-col">
                        <Tabs defaultValue="description" className="flex-1">
                            <div className="border-b px-4">
                                <TabsList>
                                    <TabsTrigger value="description">Description</TabsTrigger>
                                    <TabsTrigger value="solutions">Solutions</TabsTrigger>
                                    <TabsTrigger value="submissions">Submissions</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="description" className="p-4 h-full">
                                <ScrollArea className="h-full pr-4">
                                    <h1 className="text-2xl font-bold mb-4">Two Sum</h1>
                                    <div className="prose prose-sm dark:prose-invert">
                                        <p>
                                            Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
                                        </p>
                                        <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                                        <h3>Example 1:</h3>
                                        <pre>
                                            Input: nums = [2,7,11,15], target = 9
                                            Output: [0,1]
                                            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                                        </pre>
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>

                <ResizableHandle />

                {/* Right: Editor & Console */}
                <ResizablePanel defaultSize={60}>
                    <ResizablePanelGroup direction="vertical">
                        {/* Top: Editor */}
                        <ResizablePanel defaultSize={70}>
                            <div className="h-full relative">
                                <Editor
                                    height="100%"
                                    defaultLanguage="javascript"
                                    theme="vs-dark"
                                    value={code}
                                    onChange={(val) => setCode(val || "")}
                                    options={{
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        scrollBeyondLastLine: false,
                                    }}
                                />
                                <div className="absolute bottom-4 right-4 z-10">
                                    <Button size="sm" variant="outline" className=" bg-background/80 backdrop-blur" onClick={handleGetHint}>
                                        <Zap className="mr-2 h-4 w-4 text-yellow-500" /> AI Hint
                                    </Button>
                                </div>
                            </div>
                        </ResizablePanel>

                        <ResizableHandle />

                        {/* Bottom: Console */}
                        <ResizablePanel defaultSize={30}>
                            <div className="h-full bg-muted/30 flex flex-col">
                                <div className="border-b p-2 px-4 text-xs font-semibold text-muted-foreground uppercase">
                                    Console / Output
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    {output || "Run code to see output..."}
                                </div>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>
    )
}
