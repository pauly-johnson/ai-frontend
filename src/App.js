import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import categorizedRoles from './rolesData';
import categorizedPrompts from './promptTemplates';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [systemContent, setSystemContent] = useState('you are an alien');
  const [loading, setLoading] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [showInfo, setShowInfo] = useState(false);

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
        <h1>Pro Prompt</h1>
        <button
          type="button"
          onClick={() => setShowInfo(prev => !prev)}
          style={{ marginBottom: '1em' }}
        >
          System Role Info
          {showInfo ? ' 🔽' : ' 🔼'}
        </button>
        {showInfo && (
          <div className="info-box" style={{
            background: '#f0f4fa',
            border: '1px solid #bcd',
            borderRadius: '8px',
            padding: '1em',
            marginBottom: '1em',
            color: '#222',
            maxWidth: '500px',
            textAlign: 'left'
          }}>
            <h3>🧠 What Is a System Role in AI?</h3>
            <p>A system role is a way to tell the AI what kind of "person" it should act like.</p>
            <p>Think of it like putting the AI in costume before it starts talking — it sets the tone, personality, and job of the AI so it behaves in a certain way.</p>
            <h4>🎭 What Does a System Role Do?</h4>
            <ul>
              <li>It guides how the AI thinks, talks, and responds to you.</li>
              <li>It helps the AI stay focused on the right role, like:</li>
              <ul>
                <li>A teacher who explains things clearly</li>
                <li>A developer who writes clean code</li>
                <li>A therapist who listens calmly</li>
                <li>A storyteller who creates cool adventures</li>
                <li>A translator who switches languages</li>
              </ul>
            </ul>
            <h4>🧱 How Do You Write One?</h4>
            <p>You just start your prompt with something like:</p>
            <p><strong>👉 “You are a [role]…”</strong></p>
            <p>Examples:</p>
            <ul>
              <li>“You are a helpful math tutor. Explain how fractions work.”</li>
              <li>“You are a professional editor. Fix this paragraph.”</li>
              <li>“You are a travel guide. Recommend fun things to do in Paris.”</li>
            </ul>
            <h4>✅ Why Use System Roles?</h4>
            <ul>
              <li>They help you get better, more accurate, and more creative responses by telling the AI:</li>
              <ul>
                <li>What kind of tone to use (formal, friendly, funny)</li>
                <li>What knowledge or skills to focus on</li>
                <li>How to behave in the conversation</li>
              </ul>
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="role-select">Choose a role:</label>
          <br/>
          <select
            id="role-select"
            value={systemContent}
            onChange={e => setSystemContent(e.target.value)}
            style={{ marginBottom: '1em', width: 'auto' }}
          >
            <option value="">-- Select a role --</option>
            {Object.entries(categorizedRoles).map(([category, roles]) => (
              <optgroup key={category} label={category}>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <br/>
          <label htmlFor="prompt-template-select">Choose a prompt template:</label>
          <br/>
          <select
            id="prompt-template-select"
            value={selectedPrompt}
            onChange={e => {
              const template = e.target.value;
              if (template) {
                setPrompt(prev => prev ? prev + '\n' + template : template);
              }
              setSelectedPrompt('');
            }}
            style={{ marginBottom: '1em', width: 'auto' }}
          >
            <option value="">-- Select a prompt template --</option>
            {Object.entries(categorizedPrompts).map(([category, prompts]) => (
              <optgroup key={category} label={category}>
                {prompts.map(promptText => (
                  <option key={promptText} value={promptText}>{promptText}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <br/>
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
