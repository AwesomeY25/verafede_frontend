<template>
    <div class="col m-2 align-items-center">
        <div class="row m-2">
            <div class="col">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname"><br>
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label class="label-align-left" for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="school">School:</label><br>
                <input type="text" id="school" name="school">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="degreeprogram">Degree Program:</label><br>
                <input type="text" id="degreeprogram" name="degreeprogram">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="passsword1">Password:</label><br>
                <input type="password" id="passsword1" name="passsword1">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="passsword2">Confirm Password:</label><br>
                <input type="password" id="passsword2" name="passsword2">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="birthday">Birthday:</label><br>
                <input type="date" id="birthday" name="birthday">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="startdate">Start Date:</label><br>
                <input type="date" id="startdate" name="startdate">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="enddate">End Date:</label><br>
                <input type="date" id="enddate" name="enddate">
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="yearlevel">Year Level:</label><br>
                <select id="yearlevel" name="yearlevel">
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
                <option value="5">Fourth Year</option>
                </select>
            </div>
        </div>
        <div class="row m-2">
            <div class="col">
                <label for="internshiptype">Internship Type:</label><br>
                <select id="internshiptype" name="internshiptype">
                <option value="R">Required Internship</option>
                <option value="V">Voluntary Internship</option>
                </select>
            </div>
        </div>
        <input type="submit" value="Submit" id="myModal" class="modal">
    </div>



</template>

<script>
export default {
  name: 'InternForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>