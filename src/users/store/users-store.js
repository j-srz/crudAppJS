const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error("Not implemented");
};

const loadPreviousPage = async () => {
  throw new Error("Not implemented");
};

const onUserCanged = () => {
  throw new Error("Not implemented");
};

const reloadPage = () => {
  throw new Error("Not implemented");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserCanged,
  reloadPage,

	getUser: () => [...state.users],
	getCurrentPage: () => state.currentPage,
};
