<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 text-left">
            <router-link to="/accomodations" class="btn btn-default">Back</router-link>
          </div>

        </div>
      </div>
    </div>


    <card>
      <form @submit.prevent>
        <base-input
          label="Name"
          type="name"
          placeholder="Name"
        ></base-input>

        <base-input
          label="Description"
          type="description"
          placeholder="Description"
        ></base-input>

        <base-input
          label="Standard Rate"
          type="standard_rate"
          placeholder="Starndard Rate"
        ></base-input>



        <base-button native-type="submit" type="primary">Submit</base-button>
      </form>
    </card>
  </div>
</template>
