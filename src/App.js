import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [systemContent, setSystemContent] = useState('you are an alien');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://aitest-yr0w.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, systemContent }),
      });

      const data = await res.json();
      setResponse(data.response || 'No response from the server');
    } catch (error) {
      console.error('Error connecting to the backend:', error);
      setResponse('Error connecting to the backend');
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prompt Pro </h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows="5"
            cols="50"
          />
          <br />
          {!loading && <button type="submit">Send</button>}
          {loading && <span className="loader">Loading...</span>}
        </form>
        <div className="response">
          <h2>Response:</h2>
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
}

export default App;
