type BrowserWindowWithAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

let sharedAudioContext: AudioContext | null = null;

function createAudioContext() {
  const AudioContextConstructor =
    window.AudioContext ??
    (window as BrowserWindowWithAudio).webkitAudioContext;

  return AudioContextConstructor ? new AudioContextConstructor() : null;
}

function getAudioContext() {
  sharedAudioContext = sharedAudioContext ?? createAudioContext();
  return sharedAudioContext;
}

function startAudio(audioContext: AudioContext) {
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
}

function playTone(
  frequency: number,
  startTime: number,
  duration: number,
  type: OscillatorType,
  volume: number
) {
  const audioContext = getAudioContext();

  if (!audioContext) return;

  startAudio(audioContext);

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(volume, startTime + 0.012);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

export function playButtonTone() {
  const audioContext = getAudioContext();

  if (!audioContext) return;

  startAudio(audioContext);

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const startTime = audioContext.currentTime;

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(420, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(760, startTime + 0.08);

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(0.05, startTime + 0.012);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.14);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.15);
}

export function playCorrectAnswerSound() {
  const audioContext = getAudioContext();

  if (!audioContext) return;

  startAudio(audioContext);

  const startTime = audioContext.currentTime;
  playTone(523.25, startTime, 0.12, "sine", 0.065);
  playTone(659.25, startTime + 0.09, 0.13, "sine", 0.07);
  playTone(783.99, startTime + 0.18, 0.18, "triangle", 0.075);
}

export function playWrongAnswerSound() {
  const audioContext = getAudioContext();

  if (!audioContext) return;

  startAudio(audioContext);

  const startTime = audioContext.currentTime;
  playTone(196, startTime, 0.12, "square", 0.055);
  playTone(138.59, startTime + 0.1, 0.16, "sawtooth", 0.06);
  playTone(98, startTime + 0.22, 0.2, "triangle", 0.055);
}
