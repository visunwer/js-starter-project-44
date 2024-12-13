/* eslint-disable import/extensions */
import gameEngine from '../src/game-engine.js';

export default () => {
  const intro = 'Find the greatest common divisor of given numbers.';
  const game = 'gcd';
  gameEngine(intro, game);
};
