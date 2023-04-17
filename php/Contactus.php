<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Web Design</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <!-- Boostrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Boostrap Script -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>


    <!-- CDN -->
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">


    <!-- Stylesheet -->
    <link href="../css/contact.css" rel="stylesheet">

</head>

<body>

  <!-- nav bar starts here -->
     <nav>
        <div class="navbar">
            <i class='bx bx-menu'></i>
            <a class="navbar-brand" href="#" >
                CostCheckr  
            </a>
            <div class="nav-links">
                <div class="sidebar-logo">
                    <a class="navbar-brand" href="#">
                        CostCheckr 
                    </a>
                    <i class='bx bx-x'></i>
                </div>
                <ul class="links">
                    <ul class="links">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../html/About.html">About</a></li>
                        <li><a href="../html/Country.html">Cost of living</a></li>
                        <li><a href="../html/comapre.html">Compare</a></li>
                        <li><a href="../php/Contactus.php">Contact</a></li>
                    </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar & Hero End -->

    <!-- Contact Us -->
    <section id="about">
        <h2>Have a question?</h2>
        <h2>Contact us!</h4>
    </section>

    <!--Section: Contact v.2-->
    <section id="contact" class="mb-4">
        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4"></h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">
        </p>


        <!--Contact Section-->
        <div class="container mt-5 shadow ">
            <div class="row ">
                <div class="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                    <h2>Let's get in touch</h2>
                    <p>We're open for any suggestion or just to have a chat</p>
                    <div class="d-flex mt-2">
                        <i class="bi bi-geo-alt"></i>
                        <p class="mt-3 ms-3">Address :Pamplemousess </p>
                    </div>
                    <div class="d-flex mt-2">
                        <i class="bi bi-telephone-forward"></i>
                        <p class="mt-4 ms-3">Phone :54729789</p>
                    </div>
                    <div class="d-flex mt-2">
                        <i class="bi bi-envelope"></i>
                        <p class="mt-4 ms-3">Email : CostCheckr@gmail.com</p>
                    </div>

                </div>
                <div class="col-md-8 p-5 ">
                    <h2>Get in touch</h2>
                    <form class="row g-3 contactForm mt-4" action="contact.php" method="POST">
                        <div class="col-md-6">
                            <label for="name" class="form-label">First Name</label>
                            <input type="name" name="name" class="form-control" id="name" required>

                            <span class="error" id="name-error" style="color: red;"></span>
                        </div>
                        
                        <div class="col-12">
                            <label for="email" class="form-label">Email Id</label>
                            <input type="text" name="email" class="form-control" id="email" required>

                            <span class="error" id="email-error" style="color: red;"></span>

                        </div>

                        <div class="col-12">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" name="subject" class="form-control" id="subject">                         
                        </div>
                        <div class="mb-4">
                            <label for="message" class="form-label"> Message</label>
                            <textarea class="form-control" name="message" id="message" rows="3"></textarea>

                            <span class="error" id="message-error" style="color: red;"></span>

                        </div>
                        <div class="col-12">
                            <button type="submit" name="submit" class="btn btn-primary mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> 
     <!--Contact Section-->

     
  <!-- Footer Start -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="single_footer">
                        <h4>CostCheckr</h4>
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./html/About.html">AboutUs</a></li>
                            <li><a href="./html/Country.html">Cost of Living </a></li>
                            <li><a href="./html/comapre.html">Compare</a></li>
                            <li><a href="./php/Contactus.php">Contact</a></li>
                        </ul>
                    </div>
                </div><!--- END COL -->
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="single_footer single_footer_address">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./html/About.html">AboutUs</a></li>
                            <li><a href="./html/Country.html">Cost of Living </a></li>
                            <li><a href="./html/comapre.html">Compare</a></li>
                            <li><a href="./php/Contactus.php">Contact</a></li>
                        </ul>
                    </div>
                </div><!--- END COL -->
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="single_footer single_footer_address">
                        <h4>Contact us Today</h4>
                        <ul>
                            <li><a href="./html/About.html">About Us </a></li>
                            <li><a href="./html/Country.html">Cost of Living </a></li>
                            <li><a href="./php/Contactus.php">Contact Us</a></li>
                    </div>
                    <div class="social_profile">
                        <ul>
                            <li><a href="https://www.facebook.com/mary.odeh.1257"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://instagram.com/maireeee_beautyworld?igshid=YmMyMTA2M2Y="><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/mary-odeh-702176189/"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div><!--- END COL -->
            </div><!--- END ROW -->
            <div class="row">
                <div class="col-lg-12 ">
                    <p class="copyright">Copyright © 2023 <a href="#">CostCheckr</a>.</p>
                </div><!--- END COL -->
            </div><!--- END ROW -->
        </div><!--- END CONTAINER -->
   </div>
   <!-- Footer End -->





   <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Javascript -->
    <script src="../script/main.js"></script>
    <script src="./script/Search.js"></script>
</body>
</html>