import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

// Workaround for potential export naming differences in some environments
const PanelGroup = (ResizablePrimitive as any).PanelGroup || (ResizablePrimitive as any).Group
const Panel = (ResizablePrimitive as any).Panel
const PanelResizeHandle = (ResizablePrimitive as any).PanelResizeHandle || (ResizablePrimitive as any).Separator

const ResizablePanelGroup = ({
    className,
    ...props
}: React.ComponentProps<typeof PanelGroup>) => (
    <PanelGroup
        className={cn(
            "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
            className
        )}
        {...props}
    />
)

const ResizablePanel = Panel

const ResizableHandle = ({
    withHandle = false,
    className,
    ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
    withHandle?: boolean
}) => (
    <PanelResizeHandle
        className={cn(
            "relative flex w-px items-center justify-center bg-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
            className
        )}
        {...props}
    >
        {withHandle && (
            <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                <GripVertical className="h-2.5 w-2.5" />
            </div>
        )}
    </PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
