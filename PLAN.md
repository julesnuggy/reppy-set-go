# Plan
## MVP Features
- A user can create/read/update/delete an exercise.
  - Each exercise consists of: `name`, `muscle group`, `default weight`, `default set count`, `default rep count`.
- A user can start a "one-off" workout.
  - Routines are not MVP.
  - A workout consists of: `date`, `location`, `exericses`.
- A user can select a saved exercise to their workout.
- A user can enter a new exercise to their workout.
  - Initially, this will only exist for that workout as an "ad hoc" entry.
  - Eventually, this will automatically add the entry to the exercise DB as a placeholder.
- A user can enter the weight, sets and reps completed.
  - Initially, the focus is for weightlifting.
  - Eventually, more complex settings can be entered for other exercise types.
- A user can complete their workout, which will save it in their history.
