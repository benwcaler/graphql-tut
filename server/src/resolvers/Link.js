function postedBy(parent, args, ctx, info) {
  return ctx.prisma.link({ id: parent.id }).postedBy();
}

function votes(parent, args, ctx, info) {
  return ctx.prisma.link({ id: parent.id }).votes();
}

module.exports = {
  postedBy,
  votes
};
