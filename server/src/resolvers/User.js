function links(parent, args, ctx, info) {
  return ctx.prisma.user({ id: parent.id }).links();
}

module.exports = {
  links
};
