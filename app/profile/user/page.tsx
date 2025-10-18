'use client';

import { useEffect, useState } from 'react';

/**
 * User Profile Tab
 * Display and edit user information
 */
interface User {
  id: string;
  name: string;
  email: string;
  business: string;
  phone?: string;
  joinDate: string;
}

export default function UserTab() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({});

  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) {
      const userData = JSON.parse(raw) as User;
      setUser(userData);
      setFormData(userData);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(formData));
    setUser(formData as User);
    setIsEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-bni-grey-granite">Your Profile</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-bni-grey-granite mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni disabled:bg-bni-grey-light"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-bni-grey-granite mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni disabled:bg-bni-grey-light"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-bni-grey-granite mb-2">Business</label>
          <input
            type="text"
            name="business"
            value={formData.business || ''}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni disabled:bg-bni-grey-light"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-bni-grey-granite mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni disabled:bg-bni-grey-light"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-bni-grey-granite mb-2">Join Date</label>
          <input
            type="text"
            value={formData.joinDate || ''}
            disabled
            className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni bg-bni-grey-light"
          />
        </div>
      </div>

      {isEditing && (
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition"
          >
            Save Changes
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 rounded-bni border border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
