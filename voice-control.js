const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true; // Keep listening

recognition.onresult = function (event) {
  const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
  console.log('🎤 Voice Command:', command);

  try {
    if (command.includes('scroll down')) {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    } else if (command.includes('scroll up')) {
      window.scrollBy({ top: -600, behavior: 'smooth' });
    } else if (command.includes('go to top')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (command.includes('next post')) {
      const posts = document.querySelectorAll('[role="feed"] [data-pagelet]');
      let found = false;
      for (let i = 0; i < posts.length; i++) {
        const rect = posts[i].getBoundingClientRect();
        if (rect.top >= 10) {
          posts[i].scrollIntoView({ behavior: 'smooth' });
          found = true;
          break;
        }
      }
      if (!found && posts.length > 0) {
        posts[posts.length - 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (command.includes('like post')) {
      const likeBtn = document.querySelector('[aria-label="Like"], [aria-label="React"]');
      if (likeBtn) likeBtn.click();
    } else if (command.includes('next reel')) {
      const nextBtn = document.querySelector('[aria-label="Next"]');
      if (nextBtn) nextBtn.click();
    } else if (command.includes('like reel')) {
      const buttons = [...document.querySelectorAll('div[role="button"]')];
      const likeButton = buttons.find(btn =>
        btn.textContent?.toLowerCase().includes('like') && btn.getAttribute('aria-pressed') === 'false'
      );
      if (likeButton) likeButton.click();
    } else if (command.includes('comment post')) {
      const commentBox = document.querySelector('[aria-label="Write a comment"]');
      if (commentBox) commentBox.focus();
    } else if (command.includes('share post')) {
      const shareBtn = document.querySelector('[aria-label="Share"]');
      if (shareBtn) shareBtn.click();
    } else if (command.includes('pause reel')) {
      const pauseBtn = document.querySelector('[aria-label="Pause"]');
      if (pauseBtn) pauseBtn.click();
    } else if (command.includes('play reel')) {
      const playBtn = document.querySelector('[aria-label="Play"]');
      if (playBtn) playBtn.click();
    } else if (command.includes('open notifications')) {
      const notifBtn = document.querySelector('[aria-label="Notifications"]');
      if (notifBtn) notifBtn.click();
    } else if (command.includes('open messages')) {
      const msgBtn = document.querySelector('[aria-label="Messenger"]');
      if (msgBtn) msgBtn.click();
    } else if (command.includes('refresh page')) {
      location.reload();
    } else if (command.includes('go home')) {
      window.location.href = 'https://www.facebook.com/';
    } else if (command.includes('open profile')) {
      const profileLink = document.querySelector('a[href*="/profile.php"], a[aria-label="Profile"]');
      if (profileLink) profileLink.click();
    } else if (command.includes('stop listening')) {
      recognition.stop();
      alert('🛑 Voice recognition stopped.');
    } else {
      alert(`🤷 Unknown command:\n"${command}"`);
    }
  } catch (err) {
    console.error('⚠️ Error executing command:', err);
    alert('An error occurred while processing the voice command.');
  }
};

recognition.onerror = function (event) {
  console.error('SpeechRecognitionErrorEvent:', event);
  const errorType = event.error || 'Unknown error';

  let message = 'An error occurred while using voice commands.';
  if (errorType === 'not-allowed') {
    message = '❌ Microphone access is blocked. Please allow it in your browser settings.';
  } else if (errorType === 'no-speech') {
    message = '😶 No speech detected. Please speak clearly.';
  }

  alert(`🚫 Speech Recognition Error\n\nType: ${errorType}\n${message}`);
};

recognition.onend = function () {
  console.log('🔁 Voice recognition ended, restarting...');
  recognition.start(); // Auto-restart
};

recognition.start();
console.log('🎤 Voice recognition started. Speak a command!');
