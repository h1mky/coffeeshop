## About the Project

This is a frontend-only React project with no backend integration.

All state is stored locally in Redux and loaded synchronously.  
Because there's no server communication, lifecycle hooks like `useEffect` are used minimally.  
If the project included backend interaction, I would make more extensive use of lifecycle hooks for:

- fetching data when components mount (`useEffect`)
- handling async requests (e.g., using `createAsyncThunk`)
- subscribing to events or cleaning up resources

Since there’s no backend, most components simply read data from Redux and render it without side effects.
