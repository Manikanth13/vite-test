import * as Authentication from "../../services/auth";

export const getUser = ({ commit, state }) => {
  const user = Authentication.getUser();

  if (user == null) return

  commit("setName", user.name);
  commit("setUserName", user.username);
};

export const login = ({ commit }, { username, password }) => {
  const userLogin = Authentication.userLogin(username, password);

  if (!userLogin) {
    commit("setError", 'Could not find user.');
    return false;
  }

  commit("setName", userLogin.name);
  commit("setUserName", userLogin.username);
  commit("setError", '');

  return true;
}