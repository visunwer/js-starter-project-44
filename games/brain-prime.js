/* eslint-disable import/extensions */
import gameEngine from '../src/game-engine.js';

export default () => {
  const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = 'prime';
  gameEngine(intro, game);
};
