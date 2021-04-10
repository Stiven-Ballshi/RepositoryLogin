<template>
<div class="mb-6">
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Starred Repository</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.id">
              <td><a :href="`https://github.com/${repo.full_name}`"> {{ repo.full_name }}</a></td>
              <td><img class="avatar" :src= 'repo.owner.avatar_url'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Repos",
  data() {
      return {
          repos: null
      };
  },
  created: function() {
      axios.get(`https://api.github.com/users/${this.$route.params.username}/starred`)
      .then(response => {
          this.repos = response.data;
          console.log(response);
          
    });
  }
};
</script>

<style scoped>
h1 {
    margin-bottom: 100px;
}
.avatar {
    width: 50px;
    margin: 20px;
}
tr {
  text-align: center;
}

</style>