<template>
  <div>
    <button type="button" class="u-header-topbar__nav-link" @click="toggleClass()">
      <i class="ec ec-user"></i> Регистрируйтесь <span class="">/</span> Войдите
    </button>
    <aside class="u-sidebar accSideNav" :class="{ active: accStatus }">
      <div class="u-sidebar__container">
        <!-- Toggle Button -->
        <button class="closebtn" @click="toggleClass()">&times;</button>
        <!-- End Toggle Button -->
        <!-- Content -->
        <div class="u-sidebar__content">
          <form class="">
            <!-- Login -->
            <div id="login">
              <!-- Title -->
              <header class="text-center">
                <h2>Welcome Back!</h2>
                <p>Login to manage your account.</p>
              </header>
              <!-- End Title -->
              <!-- Form Group -->
              <div class="form-group">
                <div class="">
                  <label class="sr-only" for="signinEmail">Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="signinEmailLabel">
                        <span class="fa fa-user"></span>
                      </span>
                    </div>
                    <input type="email" class="form-control" name="email" id="signinEmail" placeholder="Email" required>
                  </div>
                </div>
              </div>
              <!-- End Form Group -->

              <!-- Form Group -->
              <div class="form-group">
                  <label class="sr-only" for="signinPassword">Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="signinPasswordLabel">
                        <span class="fas fa-lock"></span>
                      </span>
                    </div>
                    <input type="password" class="form-control" name="password" id="signinPassword"
                           placeholder="Password" required>
                  </div>
              </div>
              <!-- End Form Group -->
              <div class="d-flex justify-content-end">
                <a class="js-animation-link small link-muted" href="javascript:;">Forgot Password?</a>
              </div>
              <div class="mb-2">
                <button type="submit" class="btn">Login</button>
              </div>

              <div class="text-center mb-4">
                <span class="small">Do not have an account?</span>
                <a class="text-dark" href="javascript:;">Signup</a>
              </div>
              <div class="text-center">
                <span class="u-divider mb-4">OR</span>
              </div>
              <!-- Login Buttons -->
              <div class="d-flex">
                <a class="btn mr-1" href="#">
                  <span class="fa fa-facebook-square mr-1"></span>
                  Facebook
                </a>
                <a class="btn ml-1" href="#">
                  <span class="fa fa-google mr-1"></span>
                  Google
                </a>
              </div>
              <!-- End Login Buttons -->
            </div>

            <!-- Signup -->
            <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">
              <!-- Title -->
              <header class="text-center mb-7">
                <h2 class="h4 mb-0">Welcome to Electro.</h2>
                <p>Fill out the form to get started.</p>
              </header>
              <!-- End Title -->

              <!-- Form Group -->
              <div class="form-group">
                <div class="js-form-message js-focus-state">
                  <label class="sr-only" for="signupEmail">Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupEmailLabel">
                                                            <span class="fas fa-user"></span>
                                                        </span>
                    </div>
                    <input type="email" class="form-control" name="email" id="signupEmail" placeholder="Email"
                           aria-label="Email" aria-describedby="signupEmailLabel" required>
                  </div>
                </div>
              </div>
              <!-- End Input -->

              <!-- Form Group -->
              <div class="form-group">
                <div class="js-form-message js-focus-state">
                  <label class="sr-only" for="signupPassword">Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="signupPasswordLabel">
                                                            <span class="fas fa-lock"></span>
                                                        </span>
                    </div>
                    <input type="password" class="form-control" name="password" id="signupPassword"
                           placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel"
                           required
                           data-msg="Your password is invalid. Please try again."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>
              </div>
              <!-- End Input -->

              <!-- Form Group -->
              <div class="form-group">
                <div class="js-form-message js-focus-state">
                  <label class="sr-only" for="signupConfirmPassword">Confirm Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signupConfirmPasswordLabel">
                                                        <span class="fas fa-key"></span>
                                                    </span>
                    </div>
                    <input type="password" class="form-control" name="confirmPassword" id="signupConfirmPassword"
                           placeholder="Confirm Password" aria-label="Confirm Password"
                           aria-describedby="signupConfirmPasswordLabel" required
                           data-msg="Password does not match the confirm password."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>
              </div>
              <!-- End Input -->

              <div class="mb-2">
                <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started
                </button>
              </div>

              <div class="text-center mb-4">
                <span class="small text-muted">Already have an account?</span>
                <a class="js-animation-link small text-dark" href="javascript:;"
                   data-target="#login"
                   data-link-group="idForm"
                   data-animation-in="slideInUp">Login
                </a>
              </div>

              <div class="text-center">
                <span class="u-divider u-divider--xs u-divider--text mb-4">OR</span>
              </div>

              <!-- Login Buttons -->
              <div class="d-flex">
                <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                  <span class="fab fa-facebook-square mr-1"></span>
                  Facebook
                </a>
                <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                  <span class="fab fa-google mr-1"></span>
                  Google
                </a>
              </div>
              <!-- End Login Buttons -->
            </div>
            <!-- End Signup -->

            <!-- Forgot Password -->
            <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">
              <!-- Title -->
              <header class="text-center mb-7">
                <h2 class="h4 mb-0">Recover Password.</h2>
                <p>Enter your email address and an email with instructions will be sent to you.</p>
              </header>
              <!-- End Title -->

              <!-- Form Group -->
              <div class="form-group">
                <div class="js-form-message js-focus-state">
                  <label class="sr-only" for="recoverEmail">Your email</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="recoverEmailLabel">
                                                            <span class="fas fa-user"></span>
                                                        </span>
                    </div>
                    <input type="email" class="form-control" name="email" id="recoverEmail" placeholder="Your email"
                           aria-label="Your email" aria-describedby="recoverEmailLabel" required
                           data-msg="Please enter a valid email address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>
              </div>
              <!-- End Form Group -->

              <div class="mb-2">
                <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password
                </button>
              </div>

              <div class="text-center mb-4">
                <span class="small text-muted">Remember your password?</span>
                <a class="js-animation-link small" href="javascript:;"
                   data-target="#login"
                   data-link-group="idForm"
                   data-animation-in="slideInUp">Login
                </a>
              </div>
            </div>
            <!-- End Forgot Password -->
          </form>
        </div>
      </div>
      <!-- End Content -->
  </aside>
  </div>
</template>

<script>
  export default {
    name: "AccountSideBar",
    data(){
      return {
        accStatus: false
      }
    },
    methods: {
      toggleClass(){
        this.accStatus = !this.accStatus;
      }
    },
  }
</script>

<style lang="sass" scoped>
  .u-header-topbar__nav-link
    background-color: transparent
    border: none
    outline: none
    padding: 0
    cursor: pointer
  .ec
    color: #334141

  .u-sidebar

    &__content
      padding-top: 50px
      text-align: center

  /* The side navigation menu */
  .accSideNav
    height: 100%
    width: 350px
    position: fixed
    z-index: 99
    top: 0
    right: 0
    background-color: #fff
    overflow-y: hidden
    padding-top: 5px
    visibility: hidden
    box-shadow: -13px 0 20px rgba(119, 131, 143, 0.08)
    transition: .7s cubic-bezier(.86, 0, .07, 1)
    transition-delay: .4s
    transform: translateX(350px)

  .accSideNav.active
    transform: translateX(0)
    transition-delay: 0s
    visibility: visible

  /* The navigation menu links */
  .accSideNav
    a
      padding: 8px 8px 8px 50px
      text-decoration: none
      font-size: 14px
      color: #333e48
      display: block
      transition: 0.3s

  /* When you mouse over the navigation links, change their color */
  .accSideNav a:hover
    color: #000

  .closebtn
    position: absolute
    top: 0
    left: 25px
    font-size: 36px
    padding-left: 0
    background: none
    outline: none
    cursor: pointer
    width: 35px
    height: 35px
    border: none
    transition: all .5s

    &:hover
      color: #0062BD


  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  aside
    transition: margin-left .5s

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px)
    .accSideNav
      padding-top: 15px

    .accSideNav a
      font-size: 14px

</style>
