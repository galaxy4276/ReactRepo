const checkLoggedIn = (ctx, next) => {
  console.log(`ctx.state.user:`, ctx.state.user.username);
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
}

export default checkLoggedIn;