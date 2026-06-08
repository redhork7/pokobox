import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DURATION = 2500

export default function GatePage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(true), 100)
    const progressTimer = setTimeout(() => setProgress(100), 50)
    const navTimer = setTimeout(() => navigate('/main'), DURATION)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(progressTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <h1
        className="text-5xl font-bold tracking-tight transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0 }}
      >
        pokobox
      </h1>
      <div className="mt-12 w-48 h-0.5 bg-border overflow-hidden rounded-full">
        <div
          className="h-full bg-foreground rounded-full transition-all ease-linear"
          style={{
            width: `${progress}%`,
            transitionDuration: `${DURATION}ms`,
          }}
        />
      </div>
    </main>
  )
}
