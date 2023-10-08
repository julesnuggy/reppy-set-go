import { Workout } from './interfaces/Workout.js';

export const FAKE_WORKOUTS: Workout[] = [
  {
    date: new Date(2023, 9, 14),
    name: 'Cardio',
    rating: 4,
    routine: 'One-Off'
  },
  {
    date: new Date(2023, 9, 13),
    name: 'Arms and chest',
    rating: 3,
    routine: 'One-Off'
  },
  {
    date: new Date(2023, 9, 11),
    name: 'Core',
    rating: 4,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 9, 8),
    name: 'Legs',
    rating: 5,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 9, 1),
    name: 'Back',
    rating: 2,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 8, 29),
    name: 'Chest',
    rating: 3,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 8, 28),
    name: 'Arms',
    rating: 4,
    routine: '5-Way Split'
  }
];
