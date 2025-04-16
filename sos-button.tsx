"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, X } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Progress } from "@/components/ui/progress"

export default function SOSButton() {
  const [isAlertActive, setIsAlertActive] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timeout | null>(null)

  const startCountdown = () => {
    setIsConfirmOpen(false)
    setIsAlertActive(true)
    setCountdown(5)

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          // This would trigger the actual SOS alert in a real app
          return 0
        }
        return prev - 1
      })
    }, 1000)

    setCountdownInterval(interval)
  }

  const cancelAlert = () => {
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }
    setIsAlertActive(false)
  }

  return (
    <>
      {isAlertActive ? (
        <Card className="bg-red-50 border-red-200 mb-6 animate-pulse">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                <span className="font-bold text-red-600">
                  {countdown > 0 ? `SOS Alert will be sent in ${countdown} seconds` : "SOS Alert Sent!"}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-red-500 hover:bg-red-100"
                onClick={cancelAlert}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {countdown > 0 && (
              <Progress value={(5 - countdown) * 20} className="h-2 bg-red-200" indicatorClassName="bg-red-500" />
            )}
            {countdown === 0 && (
              <p className="text-sm text-red-600 mt-2">
                Your emergency contacts have been notified with your current location.
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-6 border-2 border-red-500">
          <CardContent className="p-6 flex justify-center">
            <Button
              className="bg-red-500 hover:bg-red-600 text-white h-20 w-full rounded-full text-lg font-bold"
              onClick={() => setIsConfirmOpen(true)}
            >
              SOS EMERGENCY
            </Button>
          </CardContent>
        </Card>
      )}

      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm SOS Alert</AlertDialogTitle>
            <AlertDialogDescription>
              This will send an emergency alert with your current location to all your emergency contacts. Are you sure
              you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={startCountdown}>
              Send SOS Alert
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
