#!/usr/bin/env node
/* eslint-disable import/extensions */
import gameEngine from '../src/game-engine.js';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = 'even';
gameEngine(intro, game);
