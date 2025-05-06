import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: keyof typeof LucideIcons
}

export default function SkillCard({ title, description, icon }: SkillCardProps) {
  const Icon = LucideIcons[icon] as LucideIcon

  return (
    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-card-foreground shadow transition-all hover:shadow-md">
      <div className="mb-4 rounded-full bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-center text-xl font-bold">{title}</h3>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
