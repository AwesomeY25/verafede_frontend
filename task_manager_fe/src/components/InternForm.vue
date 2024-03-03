<template>
    <!-- Part One -->
    <div class="container">
        <h1>Personal Information</h1>
        <form @submit.prevent="submitForm">
        <div class="col px-2">
            <div class="row align-items-start m-2">
                <div class="col">
                    <label for="first_name" class="form-label mb-1 align-self-start">First Name:</label>
                    <input v-model="formData.first_name" class="form-control" type="text" id="first_name" name="first_name">
                </div>
                <div class="col">
                    <label for="last_name" class="form-label mb-1 label-align-start">Last Name:</label>
                    <input v-model="formData.last_name" class="form-control" type="text" id="last_name" name="last_name">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="birthday" class="form-label mb-1 align-self-start">Birthday:</label>
                    <input v-model="formData.birthday" type="date" id="birthday" name="birthday">
                </div>
                <div class="col">
                    <label for="gender" class="form-label mb-1 align-self-start">Gender:</label>
                    <select  v-model="formData.gender" id="gender" name="gender" class="form-select" aria-label="Default select example">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                        <option selected value="Prefer Not To Say">Prefer Not To Say</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="mobile_number" class="form-label mb-1 align-self-start">Mobile Number:</label>
                    <input v-model="formData.mobile_number" type="text" class="form-control" id="mobile_number" placeholder="09123456789">
                </div>
                <div class="col">
                    <label for="email" class="form-label mb-1">Email Address:</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="school" class="form-label mb-1 align-self-start">School/University:</label>
                    <input v-model="formData.school" type="text" class="form-control" id="school" placeholder="Ateneo de Manila University">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="degree" class="form-label mb-1 align-self-start">Degree Program:</label>
                    <input v-model="formData.degree" type="text" class="form-control" id="degree" placeholder="BS Business Administration">
                </div>
                <div class="col">
                    <label for="year_level" class="form-label mb-1 align-self-start">Year Level:</label>
                    <select v-model="formData.year_level" id="year_level" name="year_level" class="form-select" aria-label="Select Year Level">
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                        <option value="5">Fifth Year</option>
                    </select>
                </div>
            </div>
        </div>

        <h1>Internship Information</h1>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="internship_type" class="form-label mb-1 align-self-start">Internship Type:</label>
                    <select v-model="formData.internship_type" id="internship_type" name="internship_type" class="form-select" aria-label="Select Internship Type">
                    <option value="Required">Required Internship</option>
                    <option value="Voluntary">Voluntary Internship</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="start_date">Start Date:</label><br>
                    <input v-model="formData.start_date" type="date" id="start_date" name="start_date">
                </div>
                <div class="col">
                    <label for="end_date">End Date:</label><br>
                    <input v-model="formData.end_date" type="date" id="end_date" name="end_date">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="school_coordinator" class="form-label mb-1 align-self-start">School Coordinator (Optional):</label>
                    <input v-model="formData.school_coordinator" type="text" class="form-control" id="school_coordinator" placeholder="Juan Dela Cruz">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="department_id" class="form-label mb-1 align-self-start">Assigned Department:</label>
                    <select v-model="formData.department_id" id="department_id" name="department_id" class="form-select" aria-label="Select Internship Type">
                    <option value="1">Finance</option>
                    <option value="2">Information Technology</option>
                    <option value="3">Human Resources</option>
                    <option value="4">Operations</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row m-2">
                <div class="col">
                    <label for="nda_file" class="form-label mb-1 align-self-start">Signed NDA File Link Submission:</label>
                    <input v-model="formData.nda_file" type="url" class="form-control" id="nda_file" name="nda_file" placeholder="https://www.bit.ly/ndasubmission">
                </div>
            </div>
        </div>
        <div class="col px-2">
            <div class="row d-inline-flex align-self-end m-2">
                <div class="col mx-auto">
                    <button class="btn btn-outline-primary mb-3">Cancel</button>
                </div>
                <div class="col mx-auto">
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </div>
        </div>
    </form>

            <!-- Section to display current answers -->
    <h1>Review Response</h1>
    <div class="col">
        <h2>Personal Information</h2>
        <p>First Name: {{ formData.first_name }}</p>
        <p>Last Name: {{ formData.last_name }}</p>
        <p>Birthday: {{ formData.birthday }}</p>
        <p>Gender: {{ formData.gender }}</p>
        <p>Mobile Number: {{ formData.mobile_number }}</p>
        <p>Email Address: {{ formData.email }}</p>
        <p>School/University: {{ formData.school }}</p>
        <p>Degree Program: {{ formData.degree }}</p>
        <p>Year Level: {{ formData.year_level }}</p>
    </div>
    <div class="col">
        <h2>Personal Information</h2>
        <p>Internship Type: {{ formData.internship_type }}</p>
        <p>Start Date: {{ formData.start_date }}</p>
        <p>End Date: {{ formData.end_date }}</p>
        <p>School Coordinator: {{ formData.school_coordinator }}</p>
        <p>Assigned Department: {{ formData.department_id }}</p>
        <p>Signed NDA File Link Submission: {{ formData.nda_file }}</p>
    </div>
    </div>

</template>

<script>
export default {
  name: 'InternForm',
  data() {
    return {
      formData: {
        first_name: '',
        last_name: '',
        mid_initial: 'C',
        birthday: '',
        gender: 'Prefer Not To Say',
        mobile_number: '',
        email: '',
        school: '',
        degree: '',
        year_level: '',
        internship_type: 'Required',
        start_date: '',
        end_date: '',
        school_coordinator: '',
        department_id: '',
        nda_file: ''
      }
    };
  },
  methods: {
    async submitForm() {
    try {
        // Print the JSON file in the console log before submitting
        console.log('Form data:', JSON.stringify(this.formData));
        
        const response = await fetch('http://127.0.0.1:8000/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');
        
        // Reset form after successful submission
        this.resetForm();
    } catch (error) {
        console.error('Error submitting form:', error);
    }
},

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>