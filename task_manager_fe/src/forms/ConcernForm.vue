<template>
  <div class="container">
    <div class="container" id="header">
      <h1>Verafede Interns Concern Form</h1>
      <h3 class="mt-4">Concerns</h3>
    </div>
    <form @submit.prevent="showModal">
      <div class="mt-4 px-2" id="q1">
        <label for="issues" class="form-label">Were there any issues/problems regarding your assigned tasks?*</label>
        <select class="form-select" id="issues" name="issues" required>
          <option selected>Select</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
        </select>
      </div>

      <div class="mt-5 px-2" id="q2">
        <label for="issues_enumerated" class="form-label">If yes, what were they?*</label>
        <textarea v-model="concernData.concern_description" class="form-control" rows="5" placeholder="Write N/A if previous answer is no." id="issues_enumerated" name="issues_enumerated" required></textarea>
      </div>

      <div class="mt-5 px-2" id="q3">
        <label for="acad_workload" class="form-label">Do you have any academic workload at the moment?*</label>
        <div class="form-check">
          <input v-model="concernData.academic_workload" class="form-check-input" type="radio" id="acad_workload1" name="acad_workload" value="Full Semester" required>
          <label class="form-check-label" for="acad_workload1">Yes (taking full semester)</label>
        </div>
        <div class="form-check">
          <input v-model="concernData.academic_workload" class="form-check-input" type="radio" id="acad_workload2" name="acad_workload" value="Few Classes Only" required>
          <label class="form-check-label" for="acad_workload2">Yes (taking few classes only)</label>
        </div>
        <div class="form-check">
          <input v-model="concernData.academic_workload" class="form-check-input" type="radio" id="acad_workload3" name="acad_workload" value="NO" required>
          <label class="form-check-label" for="acad_workload3">No</label>
        </div>
      </div>

      <div class="mt-5 px-2" id="q4">
        <label for="other_commitments" class="form-label">Do you have any other commitments besides your academics and Verafede?</label>
        <textarea v-model="concernData.other_commitments" class="form-control" rows="4" placeholder="Write N/A if none." id="commitments" name="commitments"></textarea>
      </div>

      <div class="col mt-5 px-2" id="buttons">
        <div class="row d-inline-flex align-self-end m-2">
          <div class="col mx-auto" id="cancel_btn">
            <button class="btn btn-outline-primary mb-3">Cancel</button>
          </div>
          <div class="col mx-auto" id="submit_btn">
            <button class="btn btn-primary">Submit Concern</button>
          </div>
        </div>
      </div>
    </form>
<!-- Modal component for confirmation -->
<div class="modal" id="confirm-modal" tabindex="-1" aria-labelledby="confirm-modal-label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirm-modal-label">Confirm Submission</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="closeModal('confirm-modal')"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to submit your concern?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click.prevent="closeModal('confirm-modal')">Cancel</button>
            <button type="button" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal component for submission confirmation -->
    <div class="modal" id="submission-modal" tabindex="-1" aria-labelledby="submission-modal-label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="submission-modal-label">Submission Confirmation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="clearForm"></button>
          </div>
          <div class="modal-body">
            Your concern has been submitted successfully!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click.prevent="closeModal('submission-modal')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcernForm',
  data() {
    return {
      concernData: {
        intern_id: 1,
        concern_description: '',
        academic_workload: '',
        other_commitments: '',
      }
    };
  },
  methods: {
    clearForm() {
      this.concernData = {
        intern_id: 1,
        concern_description: '',
        academic_workload: '',
        other_commitments: '',
      };
    },
    showModal() {
      const modal = document.getElementById('confirm-modal');
      modal.classList.add('show');
      modal.style.display = 'block';
    },
    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.clearForm();
    },
    async submitForm() {
      try {
        this.concernData.date_filed = new Date().toISOString();
        console.log('Form data:', JSON.stringify(this.concernData));

        const response = await fetch('http://127.0.0.1:8000/concern/add/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.concernData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');

        // Close confirmation modal
        const confirmModal = document.getElementById('confirm-modal');
        confirmModal.classList.remove('show');
        confirmModal.style.display = 'none';

        // Show submission confirmation modal
        const submissionModal = document.getElementById('submission-modal');
        submissionModal.classList.add('show');
        submissionModal.style.display = 'block';

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.show {
  display: block;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #888;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  background-color: #f0f0f0;
  padding: 10px;
  border-top: 1px solid #888;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.btn-close:hover {
  color: #fff;
  background-color: #000;
}

#header > h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  text-align: center;
  color: #F27036;
  margin-top: 60px;
}
#header > h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0A0A0A;
}
#q1 > label {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}
#buttons {
  text-align: center;
}
#cancel_btn > button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #52525C;
  font-size: 14px;
  border-color: #52525C;
  width: 300px;
  height: 38px;
}
#cancel_btn > button:hover {
  background-color: #D1D9E0;
  border-color: #52525C;
  width: 300px;
  height: 38px;
}
#submit_btn > button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F8FAFC;
  font-size: 14px;
  background-color: #EA580C;
  border-color: #EA580C;
  width: 300px;
  height: 38px;
}
#submit_btn > button:hover {
  background-color: #d24f0a;
  border-color: #d24f0a;
  width: 300px;
  height: 38px;
}
</style>