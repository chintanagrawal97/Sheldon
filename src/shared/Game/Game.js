import React, { useState, useReducer, useMemo } from 'react';

import words from './words.json';

const initialState = {
    error: '',
    status: 'stopped', // values: 'stopped' | 'playing' | 'game_over'
    currentWord: '',
    words: [],
  };

  const GAME_CONFIG = {
    lazy: {
      key: 'lazy',
      timer: 0,
      minLength: 3,
    },
    easy: {
      key: 'easy',
      timer: 30,
      minLength: 3,
    },
    medium: {
      key: 'medium',
      timer: 45,
      minLength: 6,
    },
    hard: {
      key: 'hard',
      timer: 60,
      minLength: 8,
    },
  };

  

  const reducer = (state, action) => {
    switch (action.type) {
      case 'game_status':
        return { ...state, status: action.payload };
      case 'set_error':
        return { ...state, error: action.payload };
      case 'word_onchange':
        return { ...state, currentWord: action.payload };
      case 'add_word':
        return {
          ...state,
          currentWord: '',
          words: [
            {
              id: shortid.generate(),
              word: action.payload.word,
              correct: action.payload.correct,
              addedOn: action.payload.timeRemaining,
            },
            ...state.words,
          ],
        };
      case 'reset_game':
        return initialState;
      default:
        return state;
    }
  };


const Game = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [difficulty, setDifficulty] = useState('easy');
    const [minLength, setMinLength] = useState(GAME_CONFIG.easy.minLength);
    const [timeRemaining, setTimeRemaining] = useState(GAME_CONFIG.easy.timer);

    


    return (
        <div>
        <div
          id="overlay"
          style={{ backgroundColor: 'rgba(113, 128, 150, 0.9)' }}
          className="absolute inset-0 p-6 rounded text-white text-center
          flex flex-col justify-center items-center"
        >
          <h2 className="font-bold text-3xl">How many words do you know?</h2>
          <p className="md:w-1/2 mt-2">
            Test your memory and vocabulary in this fast-paced game where you have to enter as many
            valid words as possible in a given time.
          </p>

          <div className="mt-8 inline-flex">
            <button
              type="button"
              onClick={() => {
                setDifficulty(GAME_CONFIG.lazy.key);
                setMinLength(GAME_CONFIG.lazy.minLength);
                setTimeRemaining(GAME_CONFIG.lazy.timer);
              }}
              className={`${
                difficulty === 'lazy' ? 'bg-gray-500' : 'bg-gray-300'
              } hover:bg-gray-500 focus:outline-none text-gray-800
              py-2 px-4 text-sm rounded-l`}
            >
              Lazy
            </button>
            <button
              type="button"
              onClick={() => {
                setDifficulty(GAME_CONFIG.easy.key);
                setMinLength(GAME_CONFIG.easy.minLength);
                setTimeRemaining(GAME_CONFIG.easy.timer);
              }}
              className={`${
                difficulty === 'easy' ? 'bg-gray-500' : 'bg-gray-300'
              } hover:bg-gray-500 focus:outline-none text-gray-800
              py-2 px-4 text-sm`}
            >
              Easy
            </button>
            <button
              type="button"
              onClick={() => {
                setDifficulty(GAME_CONFIG.medium.key);
                setMinLength(GAME_CONFIG.medium.minLength);
                setTimeRemaining(GAME_CONFIG.medium.timer);
              }}
              className={`${
                difficulty === 'medium' ? 'bg-gray-500' : 'bg-gray-300'
              } hover:bg-gray-500 focus:outline-none text-gray-800
              py-2 px-4 text-sm`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => {
                setDifficulty(GAME_CONFIG.hard.key);
                setMinLength(GAME_CONFIG.hard.minLength);
                setTimeRemaining(GAME_CONFIG.hard.timer);
              }}
              className={`${
                difficulty === 'hard' ? 'bg-gray-500' : 'bg-gray-300'
              } hover:bg-gray-500 focus:outline-none text-gray-800
              py-2 px-4 text-sm rounded-r`}
            >
              Hard
            </button>
          </div>

          <p className="md:w-1/2 mt-6 text-sm">
            In <strong>{difficulty}</strong> difficulty, you have to come up with as many words as
            possible that are{' '}
            <strong>
              at least {minLength} letters long and within {timeRemaining} seconds.
            </strong>
          </p>

          <button
            type="button"
            className="mt-8 px-6 py-2 rounded bg-primary hover:bg-red-600"
          >
            Start Game
          </button>
        </div>
      
       </div>           
  
         );
  };
  
  export default Game;
  