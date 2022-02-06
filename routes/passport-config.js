module.exports = (LocalStrategy, passport, User) => {
  passport.use(new LocalStrategy(
    ((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        user.password = '';
        return done(null, user);
      });
    }),
  ));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).select('-password').exec((err, user) => {
      done(err, user);
    });
  });
};
