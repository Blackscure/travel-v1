<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 text-left">
            <router-link to="/agents" class="btn btn-default">Back</router-link>
          </div>

        </div>
      </div>
    </div>


    <card>
      <form @submit.prevent>
        <base-input
          label="First  Name"
          type="first_name"
          placeholder="First Name"
        ></base-input>

        <base-input
          label="Last Name"
          type="email"
          placeholder="Last Name"
        ></base-input>

        <base-input
          label="Email address"
          type="email"
          placeholder="Enter email"
        ></base-input>

        <base-input
          label="passport Number"
          type="passport_number"
          placeholder="passport_number"
        ></base-input>

        <base-button native-type="submit" type="primary">Submit</base-button>
      </form>
    </card>
  </div>
</template>
