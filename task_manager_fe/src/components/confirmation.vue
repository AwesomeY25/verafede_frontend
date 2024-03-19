{% load static %}

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>

  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    intern decline 
  </button>

  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#acceptModal">
    intern accept 
  </button>

  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sucModal">
    confirmation
  </button>
  
  <!-- MODALS -->
  <!-- UNSUCCESSFUL-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <img src="{% static "assets/request.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="mx-auto">
              <div class="row mt-3">
                <h5 class="font-weight-bold mx-auto ">Are you sure you want to decline this?</h5>
              </div>
              <div class="row ">
                <p>This will remove the item from the list permanently. This action cannot be undone. </p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary "data-dismiss="modal" >Close</button>
            <button type="button" class="btn" style="background-color:rgb(234, 88, 12);color:white" data-toggle="modal" href="#cancelledScreen" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="cancelledScreen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="mr-3 mt-2">
          <button type="button" class="close text-end" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-2">
              <img src="{% static "assets/cancel.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="row mt-2">
              <div class="text-center mx-auto mt-2 mb-3">
                <h5 class="font-weight-bold ">Your submission is <span style="color: rgb(239, 61, 61)">unsuccessful</span>!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ACCEPT ADD -->
  <div class="modal fade" id="acceptModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <img src="{% static "assets/plus.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="mx-auto">
              <div class="row mt-3">
                <h5 class="font-weight-bold mx-auto ">Are you sure you want to verify this?</h5>
              </div>
              <div class="row ">
                <p></p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary "data-dismiss="modal" >Close</button>
            <button type="button" class="btn" style="background-color:rgb(234, 88, 12);color:white" data-toggle="modal" href="#acceptScreen" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="acceptScreen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="mr-3 mt-2">
          <button type="button" class="close text-end" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-2">
              <img src="{% static "assets/plus.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="row mt-2">
              <div class="text-center mx-auto mt-2 mb-3">
                <h5 class="font-weight-bold ">Your submission has been <span style="color: rgb(3, 214, 49)">verified</span>!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SUCCESSFUL-->
  <div class="modal fade" id="sucModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <img src="{% static "assets/request.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="mx-auto">
              <div class="row mt-3">
                <h5 class="font-weight-bold mx-auto ">is the following information correct?</h5>
              </div>
              <div class="row ">
                <p></p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-toggle="modal" href="#unsucScreen" data-dismiss="modal" >Close</button>
            <button type="button" class="btn" style="background-color:rgb(234, 88, 12);color:white" data-toggle="modal" href="#sucScreen" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="sucScreen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="mr-3 mt-2">
          <button type="button" class="close text-end" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-2">
              <img src="{% static "assets/checked.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="row mt-2">
              <div class="text-center mx-auto mt-2 mb-3">
                <h5 class="font-weight-bold ">Your submission has been <span style="color: rgb(3, 214, 49)">verified</span>!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="unsucScreen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="mr-3 mt-2">
          <button type="button" class="close text-end" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-2">
              <img src="{% static "assets/cancel.png" %}" class="rounded mx-auto d-block" alt="..." width="100" height="100">
            </div>
            <div class="row mt-2">
              <div class="text-center mx-auto mt-2 mb-3">
                <h5 class="font-weight-bold ">Your submission is <span style="color: rgb(239, 61, 61)">unsuccessful</span>!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>