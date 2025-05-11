'use client';

import { useEffect, useState } from 'react';

interface SystemStatus {
  elevators: Array<{
    id: string;
    status: string;
    floor: number;
    lastMaintenance: string;
  }>;
  security: {
    status: string;
    lastIncident: string | null;
    activeGuards: number;
  };
  utilities: {
    power: { status: string; load: string };
    water: { status: string; pressure: string };
    hvac: { status: string; temperature: string };
  };
  parking: {
    totalSpaces: number;
    availableSpaces: number;
    reservedSpaces: number;
  };
}

interface BuildingStatusData {
  timestamp: string;
  systems: SystemStatus;
}

export default function BuildingStatus() {
  const [status, setStatus] = useState<BuildingStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/building-status');
        const data = await response.json();
        setStatus(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch building status');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">Loading building status...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!status) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Elevators Status */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Elevators</h3>
          {status.systems.elevators.map((elevator) => (
            <div key={elevator.id} className="mb-2">
              <p className="text-sm">
                {elevator.id}: {elevator.status} (Floor {elevator.floor})
              </p>
            </div>
          ))}
        </div>

        {/* Security Status */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <p className="text-sm">Status: {status.systems.security.status}</p>
          <p className="text-sm">Active Guards: {status.systems.security.activeGuards}</p>
          {status.systems.security.lastIncident && (
            <p className="text-sm text-red-600">Last Incident: {status.systems.security.lastIncident}</p>
          )}
        </div>

        {/* Utilities Status */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Utilities</h3>
          <p className="text-sm">Power: {status.systems.utilities.power.status} ({status.systems.utilities.power.load})</p>
          <p className="text-sm">Water: {status.systems.utilities.water.status} ({status.systems.utilities.water.pressure})</p>
          <p className="text-sm">HVAC: {status.systems.utilities.hvac.status} ({status.systems.utilities.hvac.temperature})</p>
        </div>

        {/* Parking Status */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Parking</h3>
          <p className="text-sm">Available: {status.systems.parking.availableSpaces} / {status.systems.parking.totalSpaces}</p>
          <p className="text-sm">Reserved: {status.systems.parking.reservedSpaces}</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-right">
        Last updated: {new Date(status.timestamp).toLocaleString()}
      </p>
    </div>
  );
} 