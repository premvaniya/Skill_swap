import React, { useState } from 'react';
import UserCard from '../components/UserCard';

const dummyUsers = [ {
    id: 1,
    name: 'Marc Demo',
    skills: ['Web Design', 'UI/UX'],
    availability: 'Weekends',
  },
  {
    id: 2,
    name: 'Aniket',
    skills: ['React', 'Node.js'],
    availability: 'Weekdays',
  },
  {
    id: 3,
    name: 'Joe Wills',
    skills: ['Marketing', 'SEO'],
    availability: 'Evenings',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(dummyUsers);

  const handleSearch = () => {
    const results = dummyUsers.filter((user) =>
      user.availability.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <header className="flex justify-between items-center bg-white shadow-md rounded-xl px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-red-600">Skill Swap Platform</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Availability"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Search
          </button>
          <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
            Login
          </button>
        </div>
      </header>

      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
