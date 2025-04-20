# 🎤 Facebook Voice Controller - Chrome Extension

Control your Facebook using **voice commands**!  
No mouse or keyboard needed – just talk and watch it work.

---

## 🚀 Features

This Chrome extension lets you:

| Voice Command           | Action Description                            |
|-------------------------|-----------------------------------------------|
| `scroll down`           | Scrolls the page down                         |
| `scroll up`             | Scrolls the page up                           |
| `go to top`             | Scrolls to the top of the page                |
| `next post`             | Scrolls to the next Facebook post             |
| `like post`             | Likes the current post                        |
| `comment post`          | Focuses the comment box on a post             |
| `share post`            | Clicks the share button on a post             |
| `next reel`             | Navigates to the next Facebook Reel           |
| `like reel`             | Likes the current Reel                        |
| `pause reel`            | Pauses the currently playing Reel             |
| `play reel`             | Resumes the current Reel                      |
| `open notifications`    | Opens the notifications panel                 |
| `open messages`         | Opens Messenger (Facebook chat)               |
| `refresh page`          | Reloads the Facebook page                     |
| `go home`               | Navigates to Facebook homepage                |
| `open profile`          | Opens your Facebook profile                   |
| `stop listening`        | Stops the voice recognition engine            |

---

## 🛠 Installation

1. Clone or download this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked** and select the folder containing this extension
5. Navigate to Facebook and click the extension icon to start
6. Click **“Start Listening”** and speak a command!

---

## 📁 Project Structure

```
facebook-voice-controller/
├── manifest.json
├── background.js (optional in current setup)
├── popup.html
├── popup.js
├── voice-control.js
├── icon.png (optional)
```

---

## 🧠 Technologies Used

- JavaScript (ES6+)
- Web Speech API (SpeechRecognition)
- DOM manipulation
- Chrome Extension Manifest v3

---

## ⚠️ Notes

- This works best on the **desktop version** of Facebook.
- Commands are matched using `includes()`, so try to say them clearly.
- Facebook's UI can change, which might affect some selectors.

---

## 🎥 Demo Video

Experience voice-controlled Facebook in action:  
**Live Preview:** [Click here to watch the demo](https://youtu.be/ZAyuRWs7muc)

---

## 📌 To Do / Future Features

- Add **support for Bangla commands** 🎤
- Add **voice response/feedback**
- Toggle dark/light mode with voice
- Custom command builder

---

## ⚙️ Setup & Usage

Clone the repository:

```bash
git clone https://github.com/monjurbakthmazumder/Facebook-Voice-Controller-Chrome-Extension.git
```

Open in Chrome as an unpacked extension (see installation above).

Done 🎉

No build tools or dependencies required.

---

## 🧠 How It Works

- Uses the Web Speech API to recognize voice input
- Parses recognized text and checks for command keywords
- Executes JavaScript DOM actions based on the command
- Works in real-time, continuously listening and responding

---

## 📌 Limitations

- Facebook's UI may change and break selectors
- Background noise may affect voice recognition
- Requires microphone access to work

---

## 🙌 Author

**Md Monjur Bakth Mazumder**  
💼 Full Stack Developer  
📧 Email me  
🌐 Portfolio

---

> 💬 "Let your voice control the scroll."

