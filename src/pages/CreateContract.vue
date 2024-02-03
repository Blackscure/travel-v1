<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 text-left">
            <router-link to="/contracts" class="btn btn-default">Back</router-link>
          </div>

        </div>
      </div>
    </div>


    <card>
      <form @submit.prevent="submitForm">
        <base-input
          label="Contract Rates"
          type="number"
          placeholder="Enter contract rates"
          v-model="contractRates"
          required
        ></base-input>

        <base-input
          label="Start Date"
          type="date"
          v-model="startDate"
          required
        ></base-input>

        <base-input
          label="End Date"
          type="date"
          v-model="endDate"
          required
        ></base-input>

        <!-- Accommodation Name Dropdown -->
        <base-input label="Accommodation Name">
        <select class="form-control" v-model="selectedAccommodation" required>
          <option value="accommodation1">Accommodation 1</option>
          <option value="accommodation2">Accommodation 2</option>
          <!-- Add more options as needed -->
        </select>
      </base-input>

      <!-- Travel Agent Name Dropdown -->
      <base-input label="Travel Agent Name">
        <select class="form-control" v-model="selectedTravelAgent" required>
          <option value="agent1">Travel Agent 1</option>
          <option value="agent2">Travel Agent 2</option>
          <!-- Add more options as needed -->
        </select>
      </base-input>

        <base-button native-type="submit" type="primary">Submit</base-button>
      </form>


    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contractRates: null,
      startDate: null,
      endDate: null,
      selectedAccommodation: null,
      selectedTravelAgent: null,
      accommodationOptions: [
        { value: 'accommodation1', label: 'Accommodation 1' },
        { value: 'accommodation2', label: 'Accommodation 2' },
        // Add more options as needed
      ],
      travelAgentOptions: [
        { value: 'agent1', label: 'Travel Agent 1' },
        { value: 'agent2', label: 'Travel Agent 2' },
        // Add more options as needed
      ],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        contract_rates: this.contractRates,
        start_date: this.startDate,
        end_date: this.endDate,
        accommodation: {
          name: this.selectedAccommodation,
        },
        travel_agent: {
          name: this.selectedTravelAgent,
        },
      };

      // Now you can send formData to your API using Axios or your preferred HTTP library
      console.log(formData);

      // Clear form fields after submission
      this.clearForm();
    },
    clearForm() {
      this.contractRates = null;
      this.startDate = null;
      this.endDate = null;
      this.selectedAccommodation = null;
      this.selectedTravelAgent = null;
    },
  },
};
</script>
