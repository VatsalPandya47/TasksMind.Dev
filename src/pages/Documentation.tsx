import React from 'react';

const Documentation = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-700/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">TaskMind.dev Zoom App Documentation</h1>
        <div className="text-gray-300 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Adding the App</h2>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Visit the main page of TaskMind.dev.</li>
              <li>Click the "Connect Zoom" button.</li>
              <li>You will be redirected to Zoom to authorize the connection. Review the requested permissions and click "Allow".</li>
              <li>You will be redirected back to TaskMind.dev, and your account will be connected.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Using the App</h2>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Once connected, click "Sync Meetings" to fetch your recent Zoom meetings with cloud recordings.</li>
              <li>For meetings with recordings, click "Extract" to process the transcript and generate tasks.</li>
              <li>View your generated tasks and summaries in the main dashboard.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Removing the App</h2>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>In TaskMind.dev, go to the Zoom Integration section on the Meetings tab and click "Disconnect".</li>
              <li>Log in to your Zoom account and navigate to the <a href="https://marketplace.zoom.us/user/installed" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Zoom App Marketplace</a>.</li>
              <li>Click Manage &gt; Installed Apps and search for the TaskMind.dev app.</li>
              <li>Click the TaskMind.dev app and then click Uninstall.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
