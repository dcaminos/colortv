export const getUsersStatus = state => ({
  isLoading: state.users.isLoading,
  error: state.users.error,
});

export const getUsersData = state => {
  return state.users.data;
};

export const getCurrentUser = state => {
  return state.users.currentUser;
};
