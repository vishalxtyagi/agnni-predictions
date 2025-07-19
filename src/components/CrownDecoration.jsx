import React from 'react';
export default function CrownDecoration() {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <div className="mx-4">
            <svg className="w-16 h-12 text-yellow-400" viewBox="0 0 100 60" fill="currentColor">
                <path d="M20 40 Q30 20 40 40 Q50 20 60 40 L65 35 Q55 15 45 35 Q35 15 25 35 Z"/>
            </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
        </div>
    )
}