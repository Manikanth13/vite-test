import { reactive, ref, toRefs } from "vue";

const baseUrl = "https://fakestoreapi.com";

export type User = { name: string; username: string }
export type UserList = Array<User & { password: string }>

export async function getUser() {
  const request = await fetch(baseUrl + "/users");
  const user: User = await request.json();

  return user
}

// export async function userLogin(username: string, password: string) {
//   const request = await fetch(baseUrl + "/auth/login");
//   const usersJson: UserList = await request.json();

//   return usersJson.find(s => s.password === password && s.username === username)
// }

export function userLogin(username: string, password: string) {
  const data = ref([]);
  const state = reactive({
    error: null,
    loading: false
  });

  const getUserToken = async () => {
    state.loading = true;
    try {
      const res = await fetch(baseUrl + "/auth/login");

      console.log('temp res', res);
      
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  getUserToken();

  // return { data, ...toRefs(state) };
}