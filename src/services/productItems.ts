import { toRefs, ref, reactive } from 'vue';

const baseUrl = "https://fakestoreapi.com";

export function productItems(options) {
  const data = ref([]);
  const state = reactive({
    error: null,
    loading: false
  });

  const getProductData = async () => {
    state.loading = true;
    try {
      const res = await fetch(baseUrl + "/products", options);
      data.value = await res.json();
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  getProductData();

  return { data, ...toRefs(state) };
}
