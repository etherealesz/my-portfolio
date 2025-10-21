import React from 'react';

export default function AppFooter({ isBright }) {
    return (
        <footer className={`${isBright ? 'bg-horizon-bg/80 border-horizon-card/40' : 'bg-midnight-bg/80 border-midnight-card/20'} backdrop-blur-sm border-t py-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>
                        © 2025 Enardo Stefanus.
                    </p>
                </div>
            </div>
        </footer>
    );
}


