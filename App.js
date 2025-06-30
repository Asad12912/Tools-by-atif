import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('English');
  const [topic, setTopic] = useState('');
  const [photo, setPhoto] = useState(null);
  const [account, setAccount] = useState('Main');
  const [status, setStatus] = useState('');

  const handleFileUpload = (e) => setPhoto(e.target.files[0]);

  const generateVideoFromAI = async () => {
    setStatus('Generating video via Google AI Pro...');
    await new Promise(res => setTimeout(res, 3000));
    return 'https://fakevideolink.com/generated_video.mp4';
  };

  const uploadToTikTok = async (videoUrl, topicText) => {
    setStatus('Uploading video to TikTok...');
    await new Promise(res => setTimeout(res, 2000));
    return true;
  };

  const generateHashtags = (text) => {
    const baseTags = ['#viral', '#trending', '#foryou'];
    if (text.toLowerCase().includes('rain')) baseTags.push('#rain', '#nature');
    if (text.toLowerCase().includes('food')) baseTags.push('#foodie', '#yum');
    return baseTags.join(' ');
  };

  const handleSubmit = async () => {
    if (!topic) return alert('Please enter a topic.');
    const hashtags = generateHashtags(topic);
    const videoUrl = await generateVideoFromAI();
    const uploaded = await uploadToTikTok(videoUrl, topic);
    setStatus(uploaded ? `✅ Video uploaded with hashtags: ${hashtags}` : '❌ Failed to upload video.');
  };

  return (
    <div>
      <h1>TOOLS BY ATIF</h1>
      <label>Language:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>English</option>
        <option>اردو</option>
        <option>Arabic</option>
        <option>Punjabi</option>
      </select>

      <main>
        <div className="input-section">
          <label>Enter Topic:</label>
          <input
            type="text"
            placeholder="e.g. A man vlogging in the rain"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <label className="add-photo">
            + Add Photo
            <input type="file" accept="image/*" onChange={handleFileUpload} hidden />
          </label>
        </div>

        <div className="tiktok-section">
          <label>Upload to TikTok Account:</label>
          <select value={account} onChange={(e) => setAccount(e.target.value)}>
            <option>Main</option>
            <option>Alt 1</option>
            <option>Alt 2</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Generate & Upload Video</button>
        <div className="status-msg">{status}</div>
      </main>

      <footer>
        <p>All rights reserved © TOOLS BY ATIF</p>
      </footer>
    </div>
  );
}

export default App;