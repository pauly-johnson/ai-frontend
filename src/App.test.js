import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import categorizedRoles from './rolesData';
import categorizedPrompts from './promptTemplates';

// Mock fetch for API calls
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ response: 'Test response from backend' })
    })
  );
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('App UI and logic', () => {
  test('renders main UI elements', () => {
    render(<App />);
    expect(screen.getByText(/Pro Prompt/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose a role/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose a prompt template/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your prompt here/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('shows and hides System Role Info box', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: /System Role Info/i });
    fireEvent.click(btn);
    expect(screen.getByText(/What Is a System Role in AI/i)).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText(/What Is a System Role in AI/i)).not.toBeInTheDocument();
  });

  test('shows and hides Prompt Info box', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: /Prompt Info/i });
    fireEvent.click(btn);
    expect(screen.getByText(/What Does a Prompt Structure Look Like/i)).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText(/What Does a Prompt Structure Look Like/i)).not.toBeInTheDocument();
  });

  test('selecting a role updates systemContent', () => {
    render(<App />);
    const select = screen.getByLabelText(/Choose a role/i);
    fireEvent.change(select, { target: { value: categorizedRoles['Technical Roles'][0] } });
    expect(select.value).toBe(categorizedRoles['Technical Roles'][0]);
  });

  test('typing in custom role updates systemContent', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Or create your own role/i);
    fireEvent.change(input, { target: { value: 'You are a test custom role.' } });
    expect(input.value).toBe('You are a test custom role.');
    // The select should be cleared
    const select = screen.getByLabelText(/Choose a role/i);
    expect(select.value).toBe('You are a test custom role.');
  });

  test('selecting a prompt template appends to textarea', () => {
    render(<App />);
    const select = screen.getByLabelText(/Choose a prompt template/i);
    fireEvent.change(select, { target: { value: categorizedPrompts['Learning & Understanding'][0] } });
    const textarea = screen.getByPlaceholderText(/Enter your prompt here/i);
    expect(textarea.value).toContain(categorizedPrompts['Learning & Understanding'][0]);
  });

  test('submitting the form shows loading and then response', async () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText(/Enter your prompt here/i);
    fireEvent.change(textarea, { target: { value: 'Test prompt' } });
    const button = screen.getByRole('button', { name: /Send/i });
    fireEvent.click(button);
    expect(screen.queryByRole('button', { name: /Send/i })).not.toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Test response from backend/i)).toBeInTheDocument());
  });
});

describe('rolesData.js', () => {
  test('exports categorizedRoles object with expected categories', () => {
    expect(typeof categorizedRoles).toBe('object');
    expect(Object.keys(categorizedRoles)).toContain('Technical Roles');
    expect(Object.keys(categorizedRoles)).toContain('Ethics & Critical Thinking Roles');
    expect(Object.keys(categorizedRoles)).toContain('Meta Roles (AI-Aware or System-Aware)');
  });
});

describe('promptTemplates.js', () => {
  test('exports categorizedPrompts object with expected categories', () => {
    expect(typeof categorizedPrompts).toBe('object');
    expect(Object.keys(categorizedPrompts)).toContain('Learning & Understanding');
    expect(Object.keys(categorizedPrompts)).toContain('Creativity & Fun');
  });
});
