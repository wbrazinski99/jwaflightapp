import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-full max-w-lg mx-4">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Hello Wayne!
          </h1>
          <p className="text-slate-700 text-center">
            Welcome to JWA Flight School Management System
          </p>
        </CardContent>
      </Card>
    </div>
  )
}