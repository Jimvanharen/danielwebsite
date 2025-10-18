"use client"

import { Button } from "@/components/ui/button"
import { Play, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-0">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/design-mode/Stop%20Finfluencers%20Logo.png"
                alt="Stop Finfluencers"
                width={800}
                height={150}
                className="w-full max-w-3xl h-auto"
                priority
              />
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Heb jij een Ufunded-account gekocht of coaching gevolgd bij de Trade Academy? Dan kun je je geld
              terugkrijgen!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="h-5 w-5 mr-2" />
                Bekijk Video
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
                onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <FileText className="h-5 w-5 mr-2" />
                Meld je aan voor de claim
              </Button>
            </div>
          </div>
        </section>

        <section id="video-section" className="bg-muted/30 pt-8 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden bg-card border-border">
                <div className="aspect-video bg-muted relative">
                  <video controls className="w-full h-full" poster="/video-thumbnail.png">
                    <source src="/your-video.mp4" type="video/mp4" />
                    <source src="/your-video.webm" type="video/webm" />
                    Uw browser ondersteunt de video tag niet.
                  </video>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="form-section" className="py-8 md:py-20 h-screen md:h-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full md:h-auto">
            <div className="max-w-5xl mx-auto space-y-4 md:space-y-8 h-full md:h-auto flex flex-col">
              <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                  Meld je aan voor de claim
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Vul het formulier hieronder in om deel te nemen aan de collectieve claim tegen de Trade Academy en
                  Ufunded
                </p>
              </div>

              <Card className="overflow-hidden border-border flex-1 md:flex-none">
                <div className="h-full md:aspect-[16/10] relative bg-muted">
                  <iframe
                    src="https://form.typeform.com/to/mFkoU2lF"
                    className="w-full h-full border-0"
                    title="Aanmeldingsformulier"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
