"use client"

import { useState } from "react"

/**
 * Payment Tab
 * Handle membership payment and plan upgrades
 */
export default function PaymentTab() {
  const [plan, setPlan] = useState("Professional")
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState("")

  const plans = [
    { id: "starter", name: "Starter", price: 99 },
    { id: "professional", name: "Professional", price: 199 },
    { id: "enterprise", name: "Enterprise", price: 499 },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setStatus("Please upload payment screenshot")
      return
    }

    setStatus("Uploading...")

    // Stub: In production, upload to S3/Cloudinary or API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus("✓ Submitted successfully! Pending verification.")
    setTimeout(() => setStatus(""), 3000)
  }

  return (
    <div>
      <h2 className="text-bni-grey-granite mb-6 text-2xl font-bold">Payment & Upgrade</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Payment Instructions */}
        <div>
          <h3 className="text-bni-grey-granite mb-4 font-bold">Payment Instructions</h3>
          <div className="bg-bni-grey-light space-y-4 rounded-lg p-6">
            <div>
              <p className="text-bni-grey-granite mb-2 text-sm font-semibold">Step 1: Select Plan</p>
              <p className="text-bni-grey-granite text-sm">Choose your membership level below</p>
            </div>
            <div>
              <p className="text-bni-grey-granite mb-2 text-sm font-semibold">Step 2: Scan QR Code</p>
              <p className="text-bni-grey-granite text-sm">Use UPI or your preferred payment method</p>
            </div>
            <div>
              <p className="text-bni-grey-granite mb-2 text-sm font-semibold">Step 3: Upload Proof</p>
              <p className="text-bni-grey-granite text-sm">Upload screenshot of successful transaction</p>
            </div>
            <div className="border-bni-grey-sterling border-t pt-4">
              <p className="text-bni-grey-granite text-xs">
                Verification typically takes 1-2 hours. You&apos;ll receive an email confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Select Membership Plan *</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="border-bni-grey-sterling rounded-bni w-full border px-4 py-2"
              >
                {plans.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} - ${p.price}/month
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-bni-grey-light rounded-lg p-4">
              <p className="text-bni-grey-granite mb-3 text-sm">
                📱 <strong>Scan with UPI App:</strong>
              </p>
              <div className="border-bni-grey-sterling rounded border-2 bg-white p-4 text-center">
                <p className="mb-2 text-3xl">📲</p>
                <p className="text-bni-grey-granite text-xs">UPI QR Code would appear here</p>
              </div>
            </div>

            <div>
              <label className="text-bni-grey-granite mb-2 block text-sm font-medium">
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="border-bni-grey-sterling rounded-bni w-full border px-4 py-2"
              />
              {file && <p className="mt-2 text-sm text-green-600">✓ {file.name}</p>}
            </div>

            {status && (
              <div
                className={`rounded-bni p-3 text-sm ${
                  status.includes("✓") ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                }`}
              >
                {status}
              </div>
            )}

            <button
              type="submit"
              className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover w-full px-6 py-3 font-bold transition"
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-bni-grey-light mt-8 rounded-lg p-6">
        <h3 className="text-bni-grey-granite mb-4 font-bold">Accepted Payment Methods</h3>
        <div className="text-bni-grey-granite grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div>💳 Credit/Debit Card</div>
          <div>📱 UPI Transfer</div>
          <div>🏦 Bank Transfer</div>
          <div>💰 Digital Wallets</div>
        </div>
      </div>
    </div>
  )
}
