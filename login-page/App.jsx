import React, { useState } from 'react';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import ErrorPage from './ErrorPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'login' | 'dashboard' | 'profile' | 'settings' | 'error'

  return (
    <div>
      {/* Quick navigation bar for previewing any page */}
      <div style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        backgroundColor: 'rgba(35, 81, 117, 0.95)',
        backdropFilter: 'blur(8px)',
        padding: '8px 12px',
        borderRadius: '9999px',
        display: 'flex',
        gap: '8px',
        zIndex: 9999,
        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        fontSize: '13px',
        color: '#fff',
        fontFamily: 'Inter, sans-serif'
      }}>
        <span style={{ fontWeight: 600, paddingRight: '4px', opacity: 0.8, alignSelf: 'center' }}>Pages:</span>
        <button
          onClick={() => setCurrentPage('login')}
          style={{
            background: currentPage === 'login' ? '#3a89c4' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'login' ? 700 : 400
          }}
        >
          Login
        </button>
        <button
          onClick={() => setCurrentPage('dashboard')}
          style={{
            background: currentPage === 'dashboard' ? '#3a89c4' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'dashboard' ? 700 : 400
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('profile')}
          style={{
            background: currentPage === 'profile' ? '#3a89c4' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'profile' ? 700 : 400
          }}
        >
          Profile
        </button>
        <button
          onClick={() => setCurrentPage('settings')}
          style={{
            background: currentPage === 'settings' ? '#3a89c4' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'settings' ? 700 : 400
          }}
        >
          Settings
        </button>
        <button
          onClick={() => setCurrentPage('error')}
          style={{
            background: currentPage === 'error' ? '#3a89c4' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'error' ? 700 : 400
          }}
        >
          404
        </button>
      </div>

      {currentPage === 'login' && <LoginPage onLogin={() => setCurrentPage('dashboard')} />}
      {currentPage === 'dashboard' && (
        <DashboardPage
          onLogout={() => setCurrentPage('login')}
          onViewProfile={() => setCurrentPage('profile')}
          onViewSettings={() => setCurrentPage('settings')}
        />
      )}
      {currentPage === 'profile' && (
        <ProfilePage
          onBackToDashboard={() => setCurrentPage('dashboard')}
        />
      )}
      {currentPage === 'settings' && (
        <SettingsPage
          onNavigate={(page) => setCurrentPage(page)}
          onBackToDashboard={() => setCurrentPage('dashboard')}
        />
      )}
      {currentPage === 'error' && (
        <ErrorPage
          onBackToHomepage={() => setCurrentPage('dashboard')}
        />
      )}
    </div>
  );
}
