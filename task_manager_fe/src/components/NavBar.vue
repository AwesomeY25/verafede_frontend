<template>
    <!-- navigation bar -->
    <nav class="navbar mb-3" id="navbar">
        <!-- breadcrumbs -->
        <nav aria-label="breadcrumb" id="breadcrumbs">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none">My Profile</a></li>
                <li class="breadcrumb-item active" aria-current="page">Verify Intern Profiles</li>
            </ol>
        </nav>
        <div class="d-flex flex-row-reverse">
            <!-- help button -->
            <button type="button" class="btn p-2" id="help_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
                <i class="bi bi-question-circle"></i>
            </button>
            <!-- notification button -->
            <button type="button" class="btn p-2" id="notification_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                </svg>
                <i class="bi bi-bell"></i>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style>
#navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  position: fixed;
  top: 0;
  right: 0;
  align-items: center;
  width: 85%;
  height: 55px;
  background-color: #D78888;
}
#navbar > nav {
  padding-top: 5px;
  padding-left: 25px;
}
#navbar > div {
  padding-bottom: 11px;
  padding-right: 15px;
}
.breadcrumb > li + li::before {
  --bs-breadcrumb-divider: '>';
  color: #F8FAFC !important;
}
#breadcrumbs > ol > li {
  color: #F8FAFC; 
}
#breadcrumbs > ol > li > a {
  color: #F8FAFC; 
}
#breadcrumbs > ol > li > a:hover {
  color: #b6c8da; 
}
#notification_btn {
  color: #F8FAFC;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  height: 30px;
  line-height: 0px;
}
#notification_btn:hover {
  background-color: #ba5f5f;
}
#help_btn {
  color: #F8FAFC;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  height: 30px;
  line-height: 0px;
}
#help_btn:hover {
  background-color: #ba5f5f;
}
</style>