#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import greetings from '../src/cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  greetings();
};
