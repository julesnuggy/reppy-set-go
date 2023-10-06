# Plan
## Architecture
- A frontend-only SPA built using React and TypeScript 
- This is only intended for use as a web-app and not as a mobile app (since I am not using React Native)
- Data will be saved in React state or a json-server (local file) data store

# Design/UI/UX
- Despite not being intended for mobile app use, the design will take a mobile-first approach, and so will be 
  optimised in layout as if being used on a mobile phone.

## User Requirements/Stories
### Workouts
```
As a user,
So that I can track my workouts,
I want to be able to add/start a new workout.
```
```
A a user,
So that I can strucutre/plan my workout,
I want to be able to add exercises to my workout.
```
```
As a user,
So that I can adjust my workout,
I want to be able to re-order the exercises. 
```

### Exercises
```
As a user,
So that I know what exercise I am doing,
I want to be able to give each exercise a `name`, `muscle group` and `equipment type`.
```
```
As a user,
So that I can track how I am doing on each exercise,
I want to be able to log my progress for each set I complete.
```

### Sets
```
As a user,
So that I can track my progress with each set,
I want to be able to log the `weight` and `reps` for each one.
```
```
As a user,
So that I can move onto the next exercise,
I want to be able to save my data for the sets for each exercise.
```
