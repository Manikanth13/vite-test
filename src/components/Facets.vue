<template>
  <div class="w-full relative">
    <label class="facet-label">Filter: </label>

    <div
      class="
        mt-4
        relative
        border border-gray-300
        overflow-hidden
        rounded-md
        shadow-sm
      "
    >
      <input
        id="text"
        @keyup="showOptions = true"
        v-model="inputData.search"
        class="w-full px-2 py-2"
        autocomplete="off"
        placeholder="Creator..."
      />
    </div>
    <div
      class="
        absolute
        w-full
        z-50
        bg-white
        border border-gray-300
        mt-1
        search-results
        overflow-scroll overflow-y-scroll
        rounded-md
        shadow-md
      "
    >
      <ul class="py-1">
        <li
          v-for="value in creatorInput()"
          :key="value.id"
          @click="setInput(value.creator)"
          class="px-2 py-2 cursor-pointer hover:bg-gray-200"
        >
          <div
            class="
              flex
              items-center
              p-2
              rounded
              overflow-y-scroll overflow-hidden
              hover:bg-gray-100
              dark:hover:bg-gray-600
            "
          >
            <input
              id="creatorInput"
              type="checkbox"
              value=""
              class="
                w-4
                h-4
                text-sky-600
                bg-gray-100
                rounded
                border-gray-300
                focus:ring-sky-500
                dark:focus:ring-sky-600 dark:ring-offset-gray-700
                focus:ring-2
                dark:bg-gray-600 dark:border-gray-500
              "
            />
            <label
              for="creatorInput"
              class="
                ml-2
                w-full
                text-sm
                font-medium
                text-sky-900
                rounded
                dark:text-sky-300
              "
              >{{ value.creator }}</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      inputData: {},
      showOptions: false,
      data: [
        { id: 1, publish_year: "1968", creator: "Stroheker Karl" },
        { id: 2, publish_year: "1926", creator: "Johnson" },
        { id: 3, publish_year: "1826", creator: "Arnold A." },
        { id: 4, publish_year: "1965", creator: "Arnold A." },
        { id: 5, publish_year: "1968", creator: "Pumplün" },
        { id: 6, publish_year: "1950", creator: "Dieter" },
        { id: 7, publish_year: "1912", creator: "Reiner" },
        { id: 8, publish_year: "1968", creator: "Stroheker Karl" },
        { id: 9, publish_year: "1965", creator: "Arnold A." },
        { id: 10, publish_year: "1968", creator: "Stroheker Karl" },
        { id: 11, publish_year: "1965", creator: "Arnold A." },
        { id: 12, publish_year: "1968", creator: "Stroheker Karl" },
        { id: 13, publish_year: "1965", creator: "Arnold A." },
        { id: 14, publish_year: "1968", creator: "Stroheker Karl" },
        { id: 15, publish_year: "1965", creator: "Arnold A." },
      ],
    };
  },
  props: {
    item: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    setInput(value) {
      this.$set(this.inputData, "search", value);
      this.$set(this.inputData, "search_id", value.id);
      this.showOptions = false;
    },
    creatorInput() {
      if (this.inputData.search) {
        let data = this.data.filter((item) => {
          return this.inputData.search
            .toLowerCase()
            .split(" ")
            .every((i) => item.creator.toLowerCase().includes(i));
        });

        return data;
      } else {
        return this.data;
      }
    },
  },
};
</script>

<style scoped>
.search-results {
  max-height: 200px;
}
</style>
