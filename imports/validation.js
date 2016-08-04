export default LoginFormValidation = {
  username: function(username) {

    // Invalid
    if (username.length < 3) {
      return {
        "error": "INVALID_USERNAME",
        "reason": "Username must be at least 3 characters long"
      };
    }

    // Invalid
    if (!username.match(/^[a-zA-Z0-9._]+$/)) {
      return {
        "error": "INVALID_USERNAME",
        "reason": "Username can only contain English letters, digits, dot(.) and underscore(_)"
      };
    }

    // Valid
    return false;
  },

  email: function(email, optional) {

    email = email.trim();

    // Valid
    if (optional === true && email.length === 0) {
      return false;
    } else if (email.indexOf('@') !== -1) {
      return false;
    }

    // Invalid
    return {
      error: "INVALID_EMAIL",
      reason: "无效的邮件地址"
    };

  },

  password: function(password, options) {

    // Must have one number and/or symbol
    var validPasswordRegex = /^.*(?=.*[a-z])(?=.*[\d\W]).*$/;
    options = options || {};

    // Only check if a password has been entered at all.
    // This is usefull for the login forms
    if (options.validationLevel === 'exists') {
      if (password.length > 0) {
        return false;
      } else {
        return {
          error: "INVALID_PASSWORD",
          reason: "请检查密码"
        };
      }
    }

    // ---
    // Validate the password pased on some rules
    // This is useful for cases where a password needs to be created or updated.
    //

    var errors = [];

    if (password.length < 6) {
      return {
        error: "INVALID_PASSWORD",
        reason: "The length of password must beyond 6 "
      };
    }

    if (password.match(validPasswordRegex) === null) {
      return {
        error: "INVALID_PASSWORD",
        reason: "Please input valid characters"
      };
    }


    // Otherwise the password is valid
    return false
  }
};
