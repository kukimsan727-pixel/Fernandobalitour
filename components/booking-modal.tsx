"use client"

import { useState } from "react"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Check, CreditCard, Calendar, Users, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  tourTitle: string
  tourPrice: string
  tourImage: string
}

export function BookingModal({ isOpen, onClose, tourTitle, tourPrice, tourImage }: BookingModalProps) {
  const [{ isPending }] = usePayPalScriptReducer()
  const [step, setStep] = useState<"details" | "payment" | "success">("details")
  const [guests, setGuests] = useState(2)
  const [date, setDate] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const pricePerPerson = parseFloat(tourPrice)
  const totalPrice = (pricePerPerson * guests).toFixed(2)

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && date) {
      setStep("payment")
    }
  }

  const handlePaymentSuccess = () => {
    setStep("success")
  }

  const resetAndClose = () => {
    setStep("details")
    setGuests(2)
    setDate("")
    setName("")
    setEmail("")
    setPhone("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {step === "success" ? "Booking Confirmed!" : "Book Your Tour"}
          </DialogTitle>
          <DialogDescription>
            {step === "details" && "Fill in your details to proceed with booking"}
            {step === "payment" && "Complete your payment securely with PayPal"}
            {step === "success" && "Thank you for booking with Fernando Bali Tour"}
          </DialogDescription>
        </DialogHeader>

        {step === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{tourTitle}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {guests} guests - {date}
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              We have sent a confirmation email to <strong>{email}</strong>.
              Our team will contact you shortly via WhatsApp at <strong>{phone}</strong>.
            </p>
            <Button onClick={resetAndClose} className="mt-4">
              Done
            </Button>
          </div>
        ) : (
          <>
            {/* Tour Summary */}
            <div className="flex gap-4 p-4 bg-muted rounded-lg">
              <div
                className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${tourImage})` }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm line-clamp-2">{tourTitle}</h3>
                <p className="text-primary font-bold mt-1">USD {pricePerPerson} / person</p>
              </div>
            </div>

            {step === "details" && (
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                {/* Guest Selector */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Number of Guests
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      disabled={guests <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{guests}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      disabled={guests >= 10}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Tour Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                {/* Contact Details */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Total */}
                <div className="flex justify-between items-center py-4 border-t">
                  <span className="text-muted-foreground">Total ({guests} guests)</span>
                  <span className="text-2xl font-bold text-primary">USD {totalPrice}</span>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Continue to Payment
                </Button>
              </form>
            )}

            {step === "payment" && (
              <div className="space-y-4">
                {/* Booking Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-b">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-2xl font-bold text-primary">USD {totalPrice}</span>
                </div>

                {/* PayPal Buttons */}
                <div className={cn("min-h-[150px]", isPending && "flex items-center justify-center")}>
                  {isPending ? (
                    <Spinner className="w-8 h-8" />
                  ) : (
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "gold",
                        shape: "rect",
                        label: "paypal",
                      }}
                      createOrder={(_data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              description: `${tourTitle} - ${guests} guests on ${date}`,
                              amount: {
                                currency_code: "USD",
                                value: totalPrice,
                              },
                            },
                          ],
                        })
                      }}
                      onApprove={async (_data, actions) => {
                        if (actions.order) {
                          await actions.order.capture()
                          handlePaymentSuccess()
                        }
                      }}
                      onError={(err) => {
                        console.error("PayPal Error:", err)
                      }}
                    />
                  )}
                </div>

                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setStep("details")}
                >
                  Back to Details
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
