'use client';

import { useState } from 'react';

/**
 * Payment Tab
 * Handle membership payment and plan upgrades
 */
export default function PaymentTab() {
  const [plan, setPlan] = useState('Professional');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const plans = [
    { id: 'starter', name: 'Starter', price: 99 },
    { id: 'professional', name: 'Professional', price: 199 },
    { id: 'enterprise', name: 'Enterprise', price: 499 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setStatus('Please upload payment screenshot');
      return;
    }

    setStatus('Uploading...');

    // Stub: In production, upload to S3/Cloudinary or API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus('✓ Submitted successfully! Pending verification.');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-bni-grey-granite mb-6">Payment & Upgrade</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Instructions */}
        <div>
          <h3 className="font-bold text-bni-grey-granite mb-4">Payment Instructions</h3>
          <div className="bg-bni-grey-light rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-bni-grey-granite mb-2">Step 1: Select Plan</p>
              <p className="text-sm text-bni-grey-granite">Choose your membership level below</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-bni-grey-granite mb-2">Step 2: Scan QR Code</p>
              <p className="text-sm text-bni-grey-granite">Use UPI or your preferred payment method</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-bni-grey-granite mb-2">Step 3: Upload Proof</p>
              <p className="text-sm text-bni-grey-granite">Upload screenshot of successful transaction</p>
            </div>
            <div className="pt-4 border-t border-bni-grey-sterling">
              <p className="text-xs text-bni-grey-granite">
                Verification typically takes 1-2 hours. You&apos;ll receive an email confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-bni-grey-granite mb-2">
                Select Membership Plan *
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni"
              >
                {plans.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} - ${p.price}/month
                  </option>
                ))}
              </select>
            </div>

            <div className="p-4 bg-bni-grey-light rounded-lg">
              <p className="text-sm text-bni-grey-granite mb-3">
                📱 <strong>Scan with UPI App:</strong>
              </p>
              <div className="bg-white p-4 rounded border-2 border-bni-grey-sterling text-center">
                <p className="text-3xl mb-2">📲</p>
                <p className="text-xs text-bni-grey-granite">
                  UPI QR Code would appear here
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-bni-grey-granite mb-2">
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni"
              />
              {file && (
                <p className="text-sm text-green-600 mt-2">✓ {file.name}</p>
              )}
            </div>

            {status && (
              <div className={`p-3 rounded-bni text-sm ${
                status.includes('✓') ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
              }`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition"
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-8 p-6 bg-bni-grey-light rounded-lg">
        <h3 className="font-bold text-bni-grey-granite mb-4">Accepted Payment Methods</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-bni-grey-granite">
          <div>💳 Credit/Debit Card</div>
          <div>📱 UPI Transfer</div>
          <div>🏦 Bank Transfer</div>
          <div>💰 Digital Wallets</div>
        </div>
      </div>
    </div>
  );
}
