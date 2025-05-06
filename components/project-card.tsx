import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import VideoPlayer from "./video-player"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  demoUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, imageUrl, demoUrl, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>{title} Demo</DialogTitle>
              <DialogDescription>A demonstration of the {title} project in action.</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <VideoPlayer url={demoUrl} />
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="default" size="sm" asChild>
          <Link href={projectUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
