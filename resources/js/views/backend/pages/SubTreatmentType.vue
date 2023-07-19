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
                                    <h1 class="h2 mb-0 ls-tight">Sub Treatment Type</h1>
                                </div>
                                <!-- Actions -->
                                <div class="col-sm-6 col-12 text-sm-end">
                                    <div class="mx-n1">
                                        <button
                                            data-toggle="modal"
                                            data-target="#form"
                                            class="btn d-inline-flex btn-sm btn-dark mx-1"
                                        >
                                          <span class="pe-2">
                                            <i class="bi bi-plus"></i>
                                          </span>
                                            <span>Create</span>
                                        </button>
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
                        <div class="card shadow border-0 mb-7">
                            <div class="card-header">
                                <h5 class="mb-0">All Sub Treatment Types</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-nowrap">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">No..</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                        v-for="(type, index) in  types.data"
                                        :key="type.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ type.name }}</td>
                                        <td>{{ type.cost }}</td>
                                        <td>{{ type.description }}</td>
                                        <td>{{ formatDate(type.created_at) }}</td>
                                        <td class="text-end">
                                            <button
                                                title="Edit type"
                                                class="btn btn-sm btn-square btn-dark text-dark-hover"
                                                @click="editMode(type.id)"
                                                data-toggle="modal"
                                                data-target="#form"
                                            >
                                                <i class="bi bi-pen-fill"></i>
                                            </button>
                                            <button
                                                title="Delete type"
                                                @click="deleteType(type.id)"
                                                type="button"
                                                class="
                                                    btn btn-sm btn-square btn-danger
                                                    text-danger-hover
                                                  "
                                            >
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer border-0 py-5">
                                <PaginationComponent
                                    :pagination="types"
                                    @paginate="getAllTypes()"
                                    :offset="10"
                                ></PaginationComponent>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!--Modal display-->
        <div
            class="modal fade"
            id="form"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" v-if="edit">Edit Treatment Type</h5>
                        <h5 class="modal-title" v-else>Add New</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="phone">Treatment Type</label>
                                <select
                                    id="lga"
                                    v-model="type.type"
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
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    v-model="type.name"
                                    class="form-control form-control-lg"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="name">Cost</label>
                                <input
                                    type="text"
                                    v-model="type.cost"
                                    class="form-control form-control-lg"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter cost"
                                />
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea
                                    id="description"
                                    v-model="type.description"
                                    placeholder="Enter description"
                                    rows="6"
                                    class="form-control form-control-md"
                                    aria-label="With textarea"
                                ></textarea>
                            </div>
                        </div>
                        <div class="modal-footer border-top-0">
                            <button
                                type="submit"
                                @click="updateType(type.id)"
                                class="btn btn-sm btn-dark"
                                v-if="edit"
                            >
                                Update
                            </button>
                            <button
                                type="submit"
                                @click="createType()"
                                class="btn btn-sm btn-dark"
                                v-else
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end of modal -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "SubTreatmentType",
    components: {
        Nav: () => import("../../../components/Nav.vue"),
        PaginationComponent: () => import("../../../components/Pagination.vue"),
    },
    data() {
        return {
            type: {
                cost: "",
                type: 0,
                name: "",
                description: "",
            },
            types: {
                meta: {
                    current_page: 1,
                },
            },
            edit: false,
            treatmentTypes: [],
        };
    },
    created() {
        this.getAllTypes();
        this.getAllTreatmentTypes();
    },
    computed: {
        ...mapGetters(["user"]),
    },
    methods: {
        //set edit mode
        async editMode(id) {
            this.edit = true;
            let api_url = process.env.MIX_API_BASE_URL + "treatment-sub-types/";
            const response = await axios.get(api_url + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            this.type = response.data.data;
        },

        //update type
        async updateType(id) {
            let api_url = process.env.MIX_API_BASE_URL + "treatment-sub-types/";
            try {
                const response = await axios.patch(
                    api_url + id,
                    {
                        cost: this.type.cost,
                        name: this.type.name,
                        description: this.type.description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                await this.getAllTypes();
                this.$toasted.success(response.data.message);
                this.edit = false;
            } catch (e) {
                this.$toasted.error(e.response.data.message);
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

        //create type
        async createType() {
            let api_url = process.env.MIX_API_BASE_URL + "treatment-sub-types";
            try {
                const response = await axios.post(
                    api_url,
                    {
                        cost: this.type.cost,
                        type: this.type.type,
                        name: this.type.name,
                        description: this.type.description
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                this.$toasted.success(response.data.message);
                this.type.name = "";
                this.type.description = "";
                $('.modal').modal('hide');
                await this.getAllTypes();
            } catch (e) {
                this.$toasted.error(e.response.data.message);
            }
        },

        //get all type
        async getAllTypes() {
            let vm = this;
            let api_url =
                process.env.MIX_API_BASE_URL +
                `treatment-sub-types?page=${vm.types.meta.current_page}`;
            await axios
                .get(api_url, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                })
                .then((response) => {
                    vm.types = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        //delete type
        async deleteType(id) {
            let api_url = process.env.MIX_API_BASE_URL + "treatment-sub-types/";
            if (confirm("Do you really want to delete this record?")) {
                try {
                    const response = await axios.delete(api_url + id, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    this.$toasted.success(response.data.message);
                    await this.getAllTypes();
                } catch (e) {
                    this.$toasted.error(e.response.data.message);
                }
            }
        },

        //format date
        formatDate(dateString) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    },
};
</script>

<style scoped>
@import "../../../css/index.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>


