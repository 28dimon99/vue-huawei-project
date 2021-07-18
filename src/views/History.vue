<template>

    <div class="container-sm history">
      <div class="history__header">
        <div>
          <h1>История контактов</h1>
        </div>
      </div>


      <!-- Ecли переменная contacts != 0 то показываем таблицу-->
      <div class="table-responsive">
        <table v-if="contacts.length" class="table history__table">
          <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Комментирий</th>
            <th>#</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(contact, idx) of displayContacts"
              :key="contact.id"
          >
            <td>{{idx + 1}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.email}}</td>
            <td>{{contact.phone}}</td>
            <td>{{contact.commit}}</td>
            <td><button @click="removeContact" class="btn danger" type="submit">Удалить</button></td>

          </tr>
          </tbody>
        </table>
        <!--А иначе показываем-->
        <p v-else>Нет контактов...</p>
      </div>



    </div>


</template>

<script>


export default {
  name: "History",
  computed:{

    contacts(){
      return this.$store.getters.contacts
    },
    displayContacts(){
      return this.contacts
    }
  },
  methods:{
    removeContact(idx){
      this.contacts.splice(idx, 1);
    }
  }
}
</script>

<style scoped>
   .history{
     display: grid;
     margin: 100px auto;
     max-width: 1200px;
     background: white;
     text-align: center;
     border-radius: 10px;
     border: 5px solid #3eaf7c;
     padding: 10px;
   }
   .history__table th, td{
     border: 1px solid black;
   }
   .table thead{
     background:#42b983;
     color: white;
   }

   .table-responsive{
     overflow-y: auto;
     box-shadow: 0 5px 15px rgba(0,0,0, 0.2);
   }
  /* @media (max-width: 800px) {
     .table{
       display: block;
       width: 100%;
     }
     .table thead,
     .table tbody,
     .table thead th{
       display: block;
     }
     .table thead{
       float: left;
     }
     .table tbody{
       overflow-x: auto;
     }
     .table tbody tr{
       display: table-cell;
     }
     .table td{
       display: block;
     }
   }*/
</style>