<template>
  <div>
    <!-- Dashboard -->
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <!-- Vertical Navbar -->
      <Nav />
      <!-- Main content -->
      <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <!-- Header -->
        <header class="bg-surface-primary border-bottom pt-6 pb-5">
          <div class="container-fluid">
            <div class="mb-npx">
              <div class="row align-items-center">
                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                  <!-- Title -->
                  <h1 class="h2 mb-0 ls-tight">Treatment Form</h1>
                </div>

                <div class="col-sm-6 col-12 text-sm-end">
                  <div class="mx-n1">
                    <router-link
                      to="/treatments"
                      data-toggle="modal"
                      data-target="#form"
                      class="btn d-inline-flex btn-sm btn-dark mx-1"
                    >
                      <span class="pe-2">
                        <i class="bi bi-eye"></i>
                      </span>
                      <span>All Treatments</span>
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- Nav -->
            </div>
          </div>
        </header>

        <!-- Main -->
        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            <!-- Card stats -->
            <div>
              <div class="row jumbotron">
                <br />
                <div class="d-flex justify-content-center" v-if="loading">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>

                <div class="col-sm-6 form-group">
                  <label>Enrollee ID</label>
                  <input
                    type="text"
                    v-model="treatment.emp_code"
                    class="form-control form-control-lg"
                    id="surname"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Verified Doctor Name</label>
                  <input
                    type="text"
                    v-model="treatment.verified_by"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Treatment Date </label>
                  <input
                    type="date"
                    v-model="treatment.date_and_time"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Is Capitated Treatment</label>
                  <select
                    v-model="treatment.is_capitated"
                    class="
                      form-control
                      browser-default
                      custom-select
                      form-control-lg
                    "
                  >
                    <option value="0">Select capitated status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div class="col-sm-6 form-group">
                  <label>Is FFS Treatment</label>
                  <select
                    v-model="treatment.is_ffs"
                    class="
                      form-control
                      browser-default
                      custom-select
                      form-control-lg
                    "
                  >
                    <option value="0">Select fss treatment status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div class="col-sm-6 form-group">
                  <label for="email">Drugs Given</label>
                  <input
                    type="text"
                    v-model="treatment.drugs"
                    class="form-control form-control-lg"
                    id="email"
                    required
                  />
                </div>

                  <div class="col-sm-6 form-group">
                      <label for="phone">Treatment Type</label>
                      <select
                          id="lga"
                          v-model="treatment.type"
                          class="form-control form-control-lg"
                      >
                          <option value="0">Select Treatment Type</option>
                          <option
                              v-for="(treatmentType, index) in treatmentTypes"
                              v-bind:value="treatmentType.id"
                              :key="index"
                          >
                              {{ treatmentType.name }}
                          </option>
                      </select>
                  </div>
                  <div class="col-sm-6 form-group">
                      <label for="email">Sub Treatment TYpe</label>
                      <select
                          id="lga"
                          v-model="treatment.type_sub"
                          class="form-control form-control-lg"
                      >
                          <option value="0">Select Sub Treatment Type</option>
                          <option
                              v-for="(subTreatmentType, index) in subTreatmentTypes"
                              v-bind:value="subTreatmentType.id"
                              :key="index"
                          >
                              {{ subTreatmentType.name + " Cost is " + subTreatmentType.cost }}
                          </option>
                      </select>
                  </div>

                <div class="col-sm-6 form-group">
                  <label for="address-2">Height of Patient</label>
                  <input
                    type="text"
                    v-model="treatment.height"
                    class="form-control form-control-lg"
                    id="address-2"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Weight of Patient</label>
                  <input
                    type="text"
                    v-model="treatment.weight"
                    class="form-control form-control-lg"
                    id="Date"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Blood Pressure</label>
                  <input
                    type="text"
                    v-model="treatment.blood_pressure"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Pulse</label>
                  <input
                    type="text"
                    v-model="treatment.pulse"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Respiration</label>
                  <input
                    type="text"
                    v-model="treatment.respiration"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Patient Temperature</label>
                  <input
                    type="text"
                    v-model="treatment.temperature"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Treatment Given</label>
                  <input
                    type="text"
                    v-model="treatment.treatment_give"
                    class="form-control form-control-lg"
                    required
                  />
                </div>

                <div class="col-sm-6 form-group">
                  <label>Is Referred</label>
                  <select
                    v-model="treatment.is_referred"
                    class="
                      form-control
                      browser-default
                      custom-select
                      form-control-lg
                    "
                  >
                    <option value="0">Select referred status</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="description">Treatment Summary</label>
                  <textarea
                    id="description"
                    v-model="treatment.summary"
                    placeholder="Enter treatment summary"
                    rows="6"
                    class="form-control form-control-md"
                    aria-label="With textarea"
                  ></textarea>
                </div>

                <div class="col-sm-12 form-group mb-0">
                  <button
                    class="btn btn-dark float-right"
                    @click="submitTreatment"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AdministerTreatment",
  components: {
    Nav: () => import("../../../components/Nav.vue"),
  },
  data() {
    return {
      loading: false,
      treatment: {
        emp_code: "",
        verified_by: "",
        date_and_time: "",
        is_capitated: 0,
        is_ffs: 0,
        drugs: "",
        cost_of_treatment: "",
        height: "",
        weight: "",
        blood_pressure: "",
        pulse: "",
        respiration: "",
        temperature: "",
        treatment_give: "",
        is_referred: 0,
        summary: "",
        type : 0,
        sub_type: 0
      },
      treatmentTypes: [],
      subTreatmentTypes: [],
    };
  },
    created() {
        this.getAllTreatmentTypes();
        this.getAllSubTreatmentTypes();
    },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    //submit treatment form
    async submitTreatment() {
      this.loading = true;
      let api_url = process.env.MIX_API_BASE_URL + "treatments";
      try {
        const response = await axios.post(
          api_url,
          {
            emp_code: this.treatment.emp_code,
            verified_by: this.treatment.verified_by,
            date_and_time: this.treatment.date_and_time,
            is_capitated: this.treatment.is_capitated,
            is_ffs: this.treatment.is_ffs,
            drugs: this.treatment.drugs,
            height: this.treatment.height,
            weight: this.treatment.weight,
            blood_pressure: this.treatment.blood_pressure,
            pulse: this.treatment.pulse,
            respiration: this.treatment.respiration,
            temperature: this.treatment.temperature,
            treatment_give: this.treatment.treatment_give,
            is_referred: this.treatment.is_referred,
            summary: this.treatment.summary,
            type: this.treatment.type,
            sub_type : this.treatment.sub_type
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.$toasted.success(response.data.message);
        this.loading = false;
      } catch (e) {
        console.log(e.response.data.error);
        this.$toasted.error(e.response.data.message);
        this.loading = false;
      }
    },

      //get all local government areas
      async getAllTreatmentTypes() {
          let api_url = process.env.MIX_API_BASE_URL + "get-treatment-types";
          const response = await axios.get(api_url, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          });
          this.treatmentTypes = response.data.data.types;
      },

      //get all local government areas
      async getAllSubTreatmentTypes() {
          let api_url = process.env.MIX_API_BASE_URL + "get-sub-treatment-types";
          const response = await axios.get(api_url, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          });
          this.subTreatmentTypes = response.data.data.types;
      },

  },
};
</script>

<style scoped>
@import "../../../css/index.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>
