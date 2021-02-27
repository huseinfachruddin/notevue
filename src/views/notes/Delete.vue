<template>
  <button
    ref="deleteNote"
    @click="destroyNote"
    type="button"
    class="btn btn-danger"
  >
    Delete
  </button>
</template>

<script>
import axios from "axios";
export default {
  props: ["endpoint"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async destroyNote() {
      let q = window.confirm("Yakin Akan Menghapus?");
      if (q == true) {
        let response = await axios.delete(
          "/api/notes/" + this.endpoint + "/delete"
        );
        if (response.status === 200) {
          this.$toast.success(`Data berhasil dihapus!`);
          this.$refs.deleteNote.parentNode.parentNode.remove();
        }
      } else {
        console.log("NO Delete");
      }
    },
  },
};
</script>
