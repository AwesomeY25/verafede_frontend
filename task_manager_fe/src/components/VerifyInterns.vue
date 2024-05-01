<template>
    <div class="container py-3">
      <!-- for elements above table -->
      <div class="d-flex">
        <div class="p-2" id="header">
          <h3 style="color: #F27036;">New Intern Profiles</h3>
        </div>
        <!-- kebab menu -->
        <div class="p-2">
          <div class="dropdown">
            <button type="button" class="btn btn-light" id="kebab_menu" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
              </svg>
              <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="kebab_menu">
              <li><a class="dropdown-item" href="#" @click="selectAll">Select All</a></li>
              <li><a class="dropdown-item" href="#" @click="deselectAll">Deselect All</a></li>
              <li><a class="dropdown-item" href="#" @click="verifySelected">Verify Selected</a></li>
              <li><a class="dropdown-item" href="#" @click="declineSelected">Decline Selected</a></li>
            </ul>
          </div>
        </div>
        <!-- search bar -->
        <div class="p-2 ms-auto">
          <div class="input-group" id="search">
            <div class="form-outline" data-mdb-input-init>
              <input type="search" id="form1" class="form-control" placeholder="Search">
            </div>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- new interns table -->
      <table class="table" id="new_interns">
        <thead>
          <th scope="col"></th>
          <th scope="col">
            Intern Name 
            <button type="button" class="btn btn-light" id="sort_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
                <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1.7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
              </svg>
              <i class="bi bi-sort-up"></i>
            </button>
          </th>
          <th scope="col">Date Submitted</th>
          <th scope="col">NDA File</th>
          <th scope="col">Action</th>
        </thead>
        <tbody>
          <tr v-for="(intern, index) in unverifiedInterns" :key="index">
            <td><input type="checkbox" v-model="selectedInterns[intern.intern_id]"></td>
            <td>
                {{ intern.last_name }}, {{ intern.first_name }}
            </td>
            <td>
              {{ formatDate(intern.created_at) }}
            </td>
            <td>
                <a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" @click="openModal(intern.nda_file)"> {{ intern.nda_file }}
                </a>
            </td>
            <td>
              <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-success mx-1" @click="verifyIntern(intern.intern_id)" id="verify_btn">
                    Verify
                  </button>
                  <button type="button" class="btn btn-danger" @click="declineIntern(intern.intern_id)" id="decline_btn">
                    Decline
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- pagination -->
      <div class="d-flex justify-content-end">
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VerifyInterns',
    data() {
      return {
        unverifiedInterns: [],
        selectedInterns: {},
      };
    },
    mounted() {
      this.getUnverifiedInterns();
    },
    computed: {
      formatDate() {
        return (value) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(value).toLocaleDateString('en-US', options);
        };
      },
    },
    methods: {
      getUnverifiedInterns() {
        fetch('http://127.0.0.1:8000/unverified/')
          .then((response) => response.json())
          .then((data) => {
            this.unverifiedInterns = data;
          })
          .catch((error) => {
            console.error('Error fetching unverified interns:', error);
          });
      },
      selectAll() {
        for (const intern of this.unverifiedInterns) {
          if (!this.selectedInterns[intern.intern_id]) {
            this.$set(this.selectedInterns, intern.intern_id, true);
          }
        }
      },
      deselectAll() {
        for (const intern of this.unverifiedInterns) {
          if (this.selectedInterns[intern.intern_id]) {
            this.$delete(this.selectedInterns, intern.intern_id);
          }
        }
      },
      verifySelected() {
        const selectedInternIds = Object.keys(this.selectedInterns);
        if (selectedInternIds.length > 0) {
          fetch('/api/verified/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedInternIds),
          })
            .then((response) => {
              if (response.ok) {
                this.getUnverifiedInterns();
                this.deselectAll();
              } else {
                throw new Error('Error verifying interns');
              }
            })
            .catch((error) => {
              console.error('Error verifying interns:', error);
            });
        }
      },
      declineSelected() {
        const selectedInternIds = Object.keys(this.selectedInterns);
        if (selectedInternIds.length > 0) {
          fetch('/api/declined/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedInternIds),
          })
            .then((response) => {
              if (response.ok) {
                this.getUnverifiedInterns();
                this.deselectAll();
              } else {
                throw new Error('Error declining interns');
              }
            })
            .catch((error) => {
              console.error('Error declining interns:', error);
            });
        }
      },
      verifyIntern(internId) {
        fetch(`http://127.0.0.1:8000/verify/${internId}/`, {
          method: 'PATCH',
        })
          .then((response) => {
            if (response.ok) {
              this.getUnverifiedInterns();
              this.deselectAll();
            } else {
              throw new Error('Error verifying intern');
            }
          })
          .catch((error) => {
            console.error('Error verifying intern:', error);
          });
      },
      declineIntern(internId) {
        fetch(`http://127.0.0.1:8000/decline/${internId}/`, {
          method: 'PATCH',
        })
          .then((response) => {
            if (response.ok) {
              this.getUnverifiedInterns();
              this.deselectAll();
            } else {
              throw new Error('Error declining intern');
            }
          })
          .catch((error) => {
            console.error('Error declining intern:', error);
          });
      },
    },
  };
  </script>
  
<style>
/* Add your styles here */
#header > h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}
#kebab_menu {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  background-color: #FFFFFF;
  border-color: #FFFFFF;
  color: rgba(242, 112, 54, .7);
  margin: 0 auto;
  padding: 0;
}
#kebab_menu:hover {
  background-color: #cccccc;
}
#search > button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #484848;
  font-size: 11px;
  background-color: rgba(196,69, 69, .4);
  border-color: #C44545;
  height: 30px;
}
#search > div > input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-color: #C44545;
  border-radius: 6px 0px 0px 6px;
  width: 200px;
  height: 30px;
}
#search > div > input:focus {
  outline: none !important;
  border-color: #C44545;
  box-shadow: 0 0 10px #C44545;
}
.table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.table thead th {
  text-align: center;
  background-color: #EA580C;
  color: #F8FAFC;
}
#sort_btn {
  text-align: center;
  background-color: #EA580C;
  border-color: #EA580C;
  color: #F8FAFC;
  width: 30px;
  margin: 0 auto;
  padding: 0;
}
#sort_btn:hover {
  background-color: #a94c1b;
}
.table tbody td {
  text-align: center;
}
.table tbody td:nth-child(2) {
  text-align: left;
}
#verify_btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  width: 80px;
  height: 30px;
  margin: 0 auto;
  padding: 0;
  background-color: #22C55E;
  border-color: #22C55E;
}
#verify_btn:hover {
  background-color: #28914f;
}
#decline_btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  width: 80px;
  height: 30px;
  margin: 0 auto;
  padding: 0;
  background-color: #EF4444;
  border-color: #EF4444;
}
#decline_btn:hover {
  background-color: #ce2828;
}
.page-item > a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #000000;
}
.pagination a:active {
  background-color: #D78888;
  color: #F8FAFC;
}
.pagination a:focus {
  background-color: #FFFFFF;
  color: #000000;
  box-shadow: 0 0 0px;
}
.pagination a:hover:not(:active) {
  background-color: #ddd;
  color: #000000;
}
</style>
