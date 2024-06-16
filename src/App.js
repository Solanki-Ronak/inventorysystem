import React, { useState } from 'react';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import BranchFirstPage1 from './components/branch1/b1firstpage';
import BranchFirstPage2 from './components/branch2/b2firstpage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userId) => {
    setLoggedInUser(userId);
  };

  const renderLoggedInPage = () => {
    switch (loggedInUser) {
      case 'branch1':
        return <BranchFirstPage1 branchName="BRANCH1 NAME" />;
      case 'branch2':
        return <BranchFirstPage2 branchName="BRANCH2 NAME" />;
      case 'headquarters':
        // Handle headquarters page if needed
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {loggedInUser ? (
          renderLoggedInPage()
        ) : (
          <Authentication onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
