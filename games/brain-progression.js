/* eslint-disable import/extensions */
import gameEngine from '../src/game-engine.js';

export default () => {
  const intro = 'What number is missing in the progression?';
  const game = 'progression';
  gameEngine(intro, game);
};
