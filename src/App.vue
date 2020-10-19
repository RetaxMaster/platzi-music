<template>

  <h1>Nombre: {{ name }}</h1>

  <input type="text" v-model="newTask.title" placeholder="Nombre de la tarea">
  <input type="text" v-model="newTask.time" placeholder="Tiempo de la tarea">
  <button @click="addTask">Añadir tarea</button>

  <div v-show="tasks.length > 0">

    <ul>
      <li v-for="(task, i) in tasks" :key="i">
        <b>Nombre de la tarea:</b> {{ task.title }} 
        <b>Tiempo:</b> {{ task.time }} 
        <button class="is-danger" @click="removeTask(i)">&times;</button>
      </li>
    </ul>

    <p>Se han trabajado {{ totalTime }} horas</p>

  </div>

  <p v-show="tasks.length <= 0">No hay tareas para mostrar</p>

</template>

<script>

export default {

  name: 'App',

  components: {},

  created() {

    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  },

  data() {
    return {
      name: "",
      tasks: [],
      newTask: {
        title: "",
        time: ""
      }
    }
  },

  methods: {

    saveInLocalSotrage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    addTask() {

      const task = this.newTask;

      if (task.title != "" && task.time != "") {
        
        this.tasks.push({
          title: task.title,
          time: task.time
        });

        task.title = "";
        task.time = "";

        this.saveInLocalSotrage();

      }

    },

    removeTask(index){ 

      this.tasks.splice(index, 1);
      this.saveInLocalSotrage();

    }

  },

  computed: {

    totalTime() {

      let hours = 0;
      const tasks = this.tasks;

      for (const task of tasks)
        hours += parseInt(task.time);

      return hours;

    }

  }

}
</script>

<style lang="scss">
/* Es una buena pŕactica importar los estiulos generales desde el componente App.vue */
@import "./scss/main.scss";
</style>
