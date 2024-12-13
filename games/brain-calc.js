/* eslint-disable import/extensions */
import gameEngine from '../src/game-engine.js';

export default () => {
  const intro = 'What is the result of the expression?';
  const game = 'calc';
  gameEngine(intro, game);
};
