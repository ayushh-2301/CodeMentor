import { Navbar } from "@/components/layout/Navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold">Welcome to CodeMentor</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            An AI-powered platform to master programming through intelligent hints and adaptive learning
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/problems">
              <Button variant="outline" size="lg">Browse Problems</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
