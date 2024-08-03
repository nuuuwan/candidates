const URL_BASE = [
  "https://raw.githubusercontent.com",
  "nuuuwan/candidates/main/public",
].join("/");

const URL_SHORT = URL_BASE + "/tabla-short.mp3";
const URL_LONG = URL_BASE + "/tabla-long.mp3";

const TEST_MODE = true;

export default class AudioX {
  static tracks = {
    short: new Audio(URL_SHORT),
    long: new Audio(URL_LONG),
  };

  static async playIfNotNull(track) {
    if (track && track.play) {
      await track.play();
    }
  }

  static async playLong() {
    if (TEST_MODE) {
      return null;
    }
    await this.playIfNotNull(this.tracks.long);
  }

  static async playShort() {
    await this.playIfNotNull(this.tracks.short);
  }
}
