import React, { useState } from 'react'

const App = () => {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [textToRead, setTextToRead] = useState('Welcome to the accessibility app!')

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(textToRead)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        darkMode
          ? 'bg-gray-900 text-white'
          : highContrast
          ? 'bg-black text-yellow-300'
          : 'bg-white text-black'
      }`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <h1 className="text-2xl font-bold mb-4">Accessibility App</h1>

      <div className="mb-4">
        <label className="block mb-1">Text to Speak:</label>
        <textarea
          className="w-full p-2 border rounded text-black"
          value={textToRead}
          onChange={(e) => setTextToRead(e.target.value)}
        />
        <button
          onClick={speakText}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          🔊 Speak
        </button>
      </div>

      <div className="flex gap-4 flex-wrap mb-4">
        <div>
          <label>Font Size:</label>
          <div className="flex gap-2 mt-1">
            <button onClick={() => setFontSize((f) => f - 2)} className="px-2 py-1 bg-gray-300 rounded">A-</button>
            <button onClick={() => setFontSize((f) => f + 2)} className="px-2 py-1 bg-gray-300 rounded">A+</button>
          </div>
        </div>

        <div>
          <label>Contrast Mode:</label>
          <button
            onClick={() => setHighContrast((c) => !c)}
            className="ml-2 px-2 py-1 bg-gray-300 rounded"
          >
            {highContrast ? 'Normal' : 'High Contrast'}
          </button>
        </div>

        <div>
          <label>Dark Mode:</label>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="ml-2 px-2 py-1 bg-gray-300 rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      <p tabIndex={0} className="outline-none focus:ring-2 ring-blue-400">
        Try navigating here with keyboard (Tab key). This app supports accessibility!
      </p>
    </div>
  )
}

export default App
